import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError, timeout, switchMap, delay, retry, retryWhen } from 'rxjs/operators';
import { timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { generateDailyQuestions } from './question-generator.service';

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  category?: string;
}

export interface DailyQuiz {
  questions: Question[];
  category?: string;
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
        map(docSnapshot => {
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
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
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
        // Check if it's a CORS error (function not deployed) or network error
        if (error.status === 0 || error.message?.includes('CORS')) {
          console.warn('Cloud Function may not be deployed. Please deploy functions or add questions manually.');
        }
        // If generation fails (e.g., already exists, not deployed, etc.), return false
        return of(false);
      }),
      timeout(10000) // 10 second timeout
    );
  }

  /**
   * Get daily quiz, and if it doesn't exist, generate it first
   * This is the main method that should be used - it handles generation automatically
   * The first user of the day will trigger question generation
   */
  getDailyQuizWithAutoGenerate(date: string): Observable<DailyQuiz | null> {
    // First, try to get the quiz
    return this.getDailyQuiz(date).pipe(
      switchMap(quiz => {
        if (quiz && quiz.questions && quiz.questions.length > 0) {
          // Quiz exists, return it
          return of(quiz);
        } else {
          // Quiz doesn't exist, try to generate it
          console.log(`No quiz found for ${date}, generating...`);
          
          // First try Cloud Function, if that fails, use client-side generation
          return this.generateQuizForDate(date).pipe(
            // If Cloud Function succeeds, wait and retry getting the quiz
            switchMap((success) => {
              if (success) {
                // Cloud Function succeeded, wait and poll for quiz
                return this.pollForQuiz(date, 5);
              } else {
                // Cloud Function failed, use client-side generation as fallback
                console.log('Cloud Function unavailable, using client-side generation...');
                return this.generateQuizClientSide(date);
              }
            }),
            catchError(() => {
              // If Cloud Function throws error, use client-side fallback
              console.log('Cloud Function error, using client-side generation...');
              return this.generateQuizClientSide(date);
            })
          );
        }
      }),
      catchError(error => {
        console.error('Error in getDailyQuizWithAutoGenerate:', error);
        return of(null);
      })
    );
  }

  /**
   * Generate questions client-side and save to Firestore
   * This is a fallback when Cloud Function isn't available
   */
  private generateQuizClientSide(date: string): Observable<DailyQuiz | null> {
    try {
      // Generate questions using the same algorithm as Cloud Function
      const questions = generateDailyQuestions(date);
      
      // Determine the primary category (most common category in today's questions)
      const categoryCounts = new Map<string, number>();
      questions.forEach(q => {
        categoryCounts.set(q.category, (categoryCounts.get(q.category) || 0) + 1);
      });
      let primaryCategory = "";
      let maxCount = 0;
      categoryCounts.forEach((count, category) => {
        if (count > maxCount) {
          maxCount = count;
          primaryCategory = category;
        }
      });
      
      // Format questions for Firestore (include category field)
      const firestoreQuestions = questions.map(q => ({
        questionText: q.questionText,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        category: q.category
      }));
      
      // Save to Firestore
      const docRef = doc(this.firestore, 'citizenshipDaily', date);
      return from(setDoc(docRef, {
        questions: firestoreQuestions,
        date: date,
        category: primaryCategory,
        generatedAt: new Date().toISOString(),
        clientSideGenerated: true
      })).pipe(
        map(() => {
          console.log(`Successfully generated quiz client-side for ${date}`);
          return { questions: firestoreQuestions, category: primaryCategory };
        }),
        catchError(error => {
          console.error('Error saving quiz to Firestore:', error);
          // Even if save fails, return the questions so user can still use them
          return of({ questions: firestoreQuestions, category: primaryCategory });
        })
      );
    } catch (error) {
      console.error('Error in client-side generation:', error);
      return of(null);
    }
  }

  /**
   * Poll Firestore for quiz until it exists or max attempts reached
   */
  private pollForQuiz(date: string, maxAttempts: number): Observable<DailyQuiz | null> {
    let attempts = 0;
    
    return new Observable<DailyQuiz | null>(observer => {
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
              // Max attempts reached, try client-side fallback
              console.warn(`Quiz not found after ${maxAttempts} attempts, trying client-side generation...`);
              this.generateQuizClientSide(date).subscribe({
                next: (quiz) => observer.next(quiz),
                error: () => observer.next(null),
                complete: () => observer.complete()
              });
            }
          },
          error: (error) => {
            if (attempts < maxAttempts) {
              setTimeout(poll, 1000);
            } else {
              // Try client-side fallback
              this.generateQuizClientSide(date).subscribe({
                next: (quiz) => observer.next(quiz),
                error: () => observer.error(error),
                complete: () => observer.complete()
              });
            }
          }
        });
      };
      // Wait a moment before first poll
      setTimeout(poll, 1500);
    });
  }
}

