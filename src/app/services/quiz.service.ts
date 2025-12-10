import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, from } from 'rxjs';
import { map, catchError, timeout, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  category?: string;
  explanation?: string;
}

export interface DailyQuiz {
  questions: Question[];
  category?: string;
}

export interface QuizError {
  message: string;
  type: 'not_found' | 'generation_failed' | 'network_error' | 'timeout';
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private firestore = inject(Firestore);
  private http = inject(HttpClient);
  
  // Cloud Function URL for generating questions
  // This will be set after deployment - you can find it in Firebase Console
  private readonly generateFunctionUrl = `https://us-central1-${environment.firebase.projectId}.cloudfunctions.net/generateQuizManually`;

  getDailyQuiz(date: string): Observable<DailyQuiz | null> {
    try {
      const docRef = doc(this.firestore, 'citizenshipDaily', date);
      return from(getDoc(docRef)).pipe(
        timeout(5000), // 5 second timeout
        map((docSnapshot: DocumentSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            return { 
              questions: data['questions'] as Question[],
              category: data['category'] as string | undefined
            };
          }
          return null;
        }),
        catchError(error => {
          console.error('Error loading quiz:', error);
          return of(null); // Return null on error so UI can handle it
        })
      );
    } catch (error) {
      console.error('Firebase initialization error:', error);
      return of(null);
    }
  }

  getCurrentDateString(): string {
    const now = new Date();
    // Convert to NYC timezone (EST/EDT) to match Cloud Function
    const nycTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const year = nycTime.getFullYear();
    const month = String(nycTime.getMonth() + 1).padStart(2, '0');
    const day = String(nycTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Generate questions for a specific date by calling the Cloud Function
   * Returns an Observable that completes when generation is done
   */
  generateQuizForDate(date: string): Observable<boolean> {
    const url = `${this.generateFunctionUrl}?date=${date}`;
    return this.http.get<{success: boolean, date: string, questionCount: number}>(url).pipe(
      map(response => {
        console.log(`Quiz generated for ${date}:`, response);
        return true;
      }),
      catchError(error => {
        console.error('Error generating quiz:', error);
        // Return error details for better error handling
        if (error.status === 0 || error.message?.includes('CORS')) {
          return throwError(() => ({
            message: 'Cloud Function is not available. Please ensure Cloud Functions are deployed.',
            type: 'network_error' as const
          }));
        }
        if (error.name === 'TimeoutError' || error.message?.includes('timeout')) {
          return throwError(() => ({
            message: 'Request timed out. Please check your internet connection and try again.',
            type: 'timeout' as const
          }));
        }
        return throwError(() => ({
          message: 'Failed to generate quiz. Please try again later.',
          type: 'generation_failed' as const
        }));
      }),
      timeout(10000) // 10 second timeout
    );
  }

  /**
   * Get daily quiz, and if it doesn't exist, generate it first
   * This is the main method that should be used - it handles generation automatically
   * The first user of the day will trigger question generation
   * Returns Observable<DailyQuiz | QuizError>
   */
  getDailyQuizWithAutoGenerate(date: string): Observable<DailyQuiz | QuizError> {
    // First, try to get the quiz
    return this.getDailyQuiz(date).pipe(
      switchMap(quiz => {
        if (quiz && quiz.questions && quiz.questions.length > 0) {
          // Quiz exists, return it
          return of(quiz);
        } else {
          // Quiz doesn't exist, try to generate it
          console.log(`No quiz found for ${date}, generating...`);
          
          // Try Cloud Function to generate quiz
          return this.generateQuizForDate(date).pipe(
            // If Cloud Function succeeds, wait and retry getting the quiz
            switchMap(() => {
              // Cloud Function succeeded, wait and poll for quiz
              return this.pollForQuiz(date, 5);
            }),
            catchError((error: QuizError) => {
              // If Cloud Function fails, return error
              console.error('Failed to generate quiz:', error);
              return of(error);
            })
          );
        }
      }),
      catchError(error => {
        console.error('Error in getDailyQuizWithAutoGenerate:', error);
        return of({
          message: 'Failed to load quiz. Please check your internet connection and try again.',
          type: 'network_error' as const
        } as QuizError);
      })
    );
  }

  /**
   * Poll Firestore for quiz until it exists or max attempts reached
   * Returns error if quiz is not found after max attempts
   */
  private pollForQuiz(date: string, maxAttempts: number): Observable<DailyQuiz | QuizError> {
    let attempts = 0;
    
    return new Observable<DailyQuiz | QuizError>(observer => {
      const poll = () => {
        attempts++;
        this.getDailyQuiz(date).subscribe({
          next: (quiz) => {
            if (quiz && quiz.questions && quiz.questions.length > 0) {
              observer.next(quiz);
              observer.complete();
            } else if (attempts < maxAttempts) {
              // Quiz not ready yet, try again
              setTimeout(poll, 1000);
            } else {
              // Max attempts reached, return error
              console.warn(`Quiz not found after ${maxAttempts} attempts`);
              observer.next({
                message: 'Quiz was generated but could not be loaded. Please refresh the page and try again.',
                type: 'not_found' as const
              } as QuizError);
              observer.complete();
            }
          },
          error: (error) => {
            if (attempts < maxAttempts) {
              setTimeout(poll, 1000);
            } else {
              // Max attempts reached, return error
              observer.next({
                message: 'Failed to load quiz after generation. Please check your internet connection and try again.',
                type: 'network_error' as const
              } as QuizError);
              observer.complete();
            }
          }
        });
      };
      // Wait a moment before first poll
      setTimeout(poll, 1500);
    });
  }
}

