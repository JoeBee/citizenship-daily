import { Component, OnInit, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService, Question } from '../../services/quiz.service';
import { StorageService, QuizState } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit, OnDestroy {
  questions = signal<Question[]>([]);
  currentQuestionIndex = signal(0);
  answers = signal<number[]>([-1, -1, -1, -1, -1]);
  selectedAnswer = signal<number | null>(null);
  showFeedback = signal(false);
  isLoading = signal(true);
  isGenerating = signal(false);
  quizDate = signal('');
  quizCategory = signal<string>('');
  isCompleted = signal(false);
  private loadingTimeout: any = null;

  currentQuestion = computed(() => {
    const index = this.currentQuestionIndex();
    const qs = this.questions();
    return qs.length > 0 ? qs[index] : null;
  });

  isLastQuestion = computed(() => {
    return this.currentQuestionIndex() === 4;
  });

  constructor(
    private quizService: QuizService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Set a global timeout to ensure loading state never gets stuck
    this.loadingTimeout = setTimeout(() => {
      if (this.isLoading()) {
        console.warn('Loading timeout - forcing loading state to false');
        this.isLoading.set(false);
        this.isGenerating.set(false);
      }
    }, 30000); // 30 second max loading time
    
    this.loadQuiz();
  }

  ngOnDestroy(): void {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  loadQuiz(): void {
    const currentDate = this.quizService.getCurrentDateString();
    this.quizDate.set(currentDate);

    // Check if today's quiz is already completed - redirect to results
    // Check both stats and results data for reliability
    const savedResults = this.storageService.getResultsData();
    const isCompleted = this.storageService.isQuizCompletedForDate(currentDate);
    const hasResultsData = savedResults && savedResults.quizDate === currentDate && 
                           savedResults.questions && savedResults.questions.length > 0;
    
    // Only redirect to results if we have valid results data and we're not already there
    if (isCompleted && hasResultsData && this.router.url !== '/results') {
      // Delay redirect to prevent infinite loops
      setTimeout(() => {
        // Double check we're still on quiz page before redirecting
        if (this.router.url === '/') {
          this.router.navigate(['/results']).catch(err => {
            console.error('Error navigating to results:', err);
          });
        }
      }, 100);
      return;
    }
    
    // If completed but no results data, clear the completion flag and continue
    if (isCompleted && !hasResultsData) {
      console.warn('Quiz marked as completed but no results data found, resetting');
      // Clear old/incomplete results data
      this.storageService.clearResultsData();
      // Continue to load quiz normally
    }

    // Check local storage for saved state
    const savedState = this.storageService.getQuizState();
    
    const handleQuizResponse = (quiz: any) => {
      this.isLoading.set(false);
      this.isGenerating.set(false);
      if (quiz && quiz.questions && quiz.questions.length > 0) {
        this.questions.set(quiz.questions);
        this.quizCategory.set(quiz.category || '');
        if (savedState && savedState.quizDate === currentDate) {
          this.currentQuestionIndex.set(savedState.currentQuestionIndex);
          this.answers.set(savedState.answers);
        }
      } else {
        // No quiz available - this will show the error message
        this.isLoading.set(false);
        this.isGenerating.set(false);
      }
    };

    const handleError = (error: any) => {
      console.error('Error loading quiz:', error);
      this.isLoading.set(false);
      this.isGenerating.set(false);
      // Ensure we have an empty questions array to trigger the error UI
      if (this.questions().length === 0) {
        // This will show the error state in the template
      }
    };

    if (savedState && savedState.quizDate === currentDate) {
      // Resume from saved state - use auto-generate in case quiz was deleted
      this.quizService.getDailyQuizWithAutoGenerate(currentDate).subscribe({
        next: handleQuizResponse,
        error: handleError
      });
    } else {
      // Start fresh - automatically generate if doesn't exist
      if (savedState && savedState.quizDate !== currentDate) {
        this.storageService.clearQuizState();
      }
      
      // Use getDailyQuizWithAutoGenerate - first user will trigger generation
      // Check if quiz exists first to show appropriate loading message
      this.quizService.getDailyQuiz(currentDate).subscribe({
        next: (quiz) => {
          if (!quiz || !quiz.questions || quiz.questions.length === 0) {
            // Quiz doesn't exist, will generate - show generating message
            this.isGenerating.set(true);
          }
          // Now call the auto-generate method
          this.quizService.getDailyQuizWithAutoGenerate(currentDate).subscribe({
            next: handleQuizResponse,
            error: handleError
          });
        },
        error: () => {
          // If check fails, try auto-generate anyway
          this.isGenerating.set(true);
          this.quizService.getDailyQuizWithAutoGenerate(currentDate).subscribe({
            next: handleQuizResponse,
            error: handleError
          });
        }
      });
    }
  }

  selectAnswer(index: number): void {
    if (this.showFeedback()) return;
    
    this.selectedAnswer.set(index);
    this.showFeedback.set(true);
    
    const currentIndex = this.currentQuestionIndex();
    const newAnswers = [...this.answers()];
    newAnswers[currentIndex] = index;
    this.answers.set(newAnswers);
    
    this.saveState();
  }

  nextQuestion(): void {
    if (this.isLastQuestion()) {
      // Navigate to results
      const score = this.answers().filter((ans, idx) => 
        ans === this.questions()[idx].correctAnswerIndex
      ).length;
      
      this.storageService.updateStats(score, this.quizDate());
      // Save results data so it can be restored when user returns
      this.storageService.saveResultsData({
        quizDate: this.quizDate(),
        score,
        answers: this.answers(),
        questions: this.questions()
      });
      // Clear quiz state since quiz is now completed
      this.storageService.clearQuizState();
      this.router.navigate(['/results'], { 
        state: { 
          score, 
          answers: this.answers(), 
          questions: this.questions(),
          quizDate: this.quizDate()
        } 
      });
    } else {
      this.currentQuestionIndex.set(this.currentQuestionIndex() + 1);
      this.selectedAnswer.set(null);
      this.showFeedback.set(false);
      this.saveState();
    }
  }

  saveState(): void {
    const state: QuizState = {
      quizDate: this.quizDate(),
      currentQuestionIndex: this.currentQuestionIndex(),
      answers: this.answers()
    };
    this.storageService.saveQuizState(state);
  }

  isCorrect(index: number): boolean {
    const question = this.currentQuestion();
    if (!question) return false;
    return index === question.correctAnswerIndex;
  }

  isSelected(index: number): boolean {
    return this.selectedAnswer() === index;
  }

  getCorrectAnswerText(): string {
    const question = this.currentQuestion();
    if (!question) return '';
    return question.options[question.correctAnswerIndex];
  }

  getNextQuizTime(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const now = new Date();
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(msUntilMidnight / (1000 * 60 * 60));
    const minutes = Math.floor((msUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  }
}

