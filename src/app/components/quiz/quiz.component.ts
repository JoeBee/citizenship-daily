import { Component, OnInit, signal, computed } from '@angular/core';
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
export class QuizComponent implements OnInit {
  questions = signal<Question[]>([]);
  currentQuestionIndex = signal(0);
  answers = signal<number[]>([-1, -1, -1, -1, -1]);
  selectedAnswer = signal<number | null>(null);
  showFeedback = signal(false);
  isLoading = signal(true);
  isGenerating = signal(false);
  quizDate = signal('');

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
    this.loadQuiz();
  }

  loadQuiz(): void {
    const currentDate = this.quizService.getCurrentDateString();
    this.quizDate.set(currentDate);

    // Check local storage for saved state
    const savedState = this.storageService.getQuizState();
    
    const handleQuizResponse = (quiz: any) => {
      this.isLoading.set(false);
      this.isGenerating.set(false);
      if (quiz && quiz.questions) {
        this.questions.set(quiz.questions);
        if (savedState && savedState.quizDate === currentDate) {
          this.currentQuestionIndex.set(savedState.currentQuestionIndex);
          this.answers.set(savedState.answers);
        }
      }
    };

    if (savedState && savedState.quizDate === currentDate) {
      // Resume from saved state - use auto-generate in case quiz was deleted
      this.quizService.getDailyQuizWithAutoGenerate(currentDate).subscribe({
        next: handleQuizResponse,
        error: (error) => {
          console.error('Error loading quiz:', error);
          this.isLoading.set(false);
        }
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
            error: (error) => {
              console.error('Error loading quiz:', error);
              this.isLoading.set(false);
              this.isGenerating.set(false);
            }
          });
        },
        error: () => {
          // If check fails, try auto-generate anyway
          this.isGenerating.set(true);
          this.quizService.getDailyQuizWithAutoGenerate(currentDate).subscribe({
            next: handleQuizResponse,
            error: (error) => {
              console.error('Error loading quiz:', error);
              this.isLoading.set(false);
              this.isGenerating.set(false);
            }
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
}

