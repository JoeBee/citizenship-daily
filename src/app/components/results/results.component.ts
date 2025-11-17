import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../services/quiz.service';
import { IconComponent } from '../../shared/icon.component';
import { StorageService } from '../../services/storage.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit, AfterViewInit {
  score = 0;
  totalQuestions = 5;
  answers: number[] = [];
  questions: Question[] = [];
  quizDate = '';
  showCopyNotification = false;
  private shouldRedirect = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    try {
      const state = history.state;
      const currentDate = this.quizService.getCurrentDateString();
      
      if (state && state.score !== undefined) {
        // Data passed via router state
        this.score = state.score;
        this.answers = state.answers || [];
        this.questions = state.questions || [];
        this.quizDate = state.quizDate || '';
        
        // Also save to storage for future visits
        this.storageService.saveResultsData({
          quizDate: this.quizDate || currentDate,
          score: this.score,
          answers: this.answers,
          questions: this.questions
        });
      } else {
        // Try to load from storage (for returning users)
        const savedResults = this.storageService.getResultsData();
        
        if (savedResults && savedResults.quizDate === currentDate) {
          // Load saved results for today's quiz
          this.score = savedResults.score || 0;
          this.answers = savedResults.answers || [];
          this.questions = savedResults.questions || [];
          this.quizDate = savedResults.quizDate || currentDate;
          
          // If we don't have valid questions, mark for redirect
          if (!this.questions || this.questions.length === 0) {
            console.warn('Results loaded but no questions found, will redirect to quiz');
            this.shouldRedirect = true;
            return;
          }
        } else if (savedResults && savedResults.quizDate !== currentDate) {
          // Old results from a previous day - clear them and mark for redirect
          this.storageService.clearResultsData();
          this.shouldRedirect = true;
          return;
        } else {
          // No results available, mark for redirect
          console.warn('No results data found, will redirect to quiz');
          this.shouldRedirect = true;
          return;
        }
      }
      
      // Validate we have the required data
      if (!this.questions || this.questions.length === 0) {
        console.error('Results component initialized without questions, will redirect');
        this.shouldRedirect = true;
      }
    } catch (error) {
      console.error('Error initializing results component:', error);
      // On error, mark for redirect
      this.shouldRedirect = true;
    }
  }

  ngAfterViewInit(): void {
    // Delay redirect until after view is initialized to prevent infinite loops
    if (this.shouldRedirect) {
      setTimeout(() => {
        // Check if we're still on the results page before redirecting
        if (this.router.url === '/results') {
          this.router.navigate(['/']).catch(err => {
            console.error('Error navigating away from results:', err);
          });
        }
      }, 100);
    }
  }

  shareResults(): void {
    const shareText = this.generateShareText();
    this.copyToClipboard(shareText);
  }

  private copyToClipboard(text: string): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showCopyNotification = true;
        setTimeout(() => {
          this.showCopyNotification = false;
        }, 3000);
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  }

  private generateShareText(): string {
    const dateStr = this.quizDate || new Date().toISOString().split('T')[0];
    const scoreIcons = this.getScoreIcons();
    const scoreLine = `Score: ${this.score}/${this.totalQuestions}`;
    
    // Create emoji grid (5 squares in a row)
    const emojiGrid = this.answers.map((answer, index) => {
      const isCorrect = answer === this.questions[index]?.correctAnswerIndex;
      return isCorrect ? '✓' : '✗';
    }).join(' ');
    
    return `Citizenship Daily ${dateStr}\n${scoreIcons}\n${scoreLine}\n${emojiGrid}\n\nTest your knowledge at citizenship-daily-ef3e3.web.app`;
  }

  private fallbackCopy(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      this.showCopyNotification = true;
      setTimeout(() => {
        this.showCopyNotification = false;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textArea);
  }

  isCorrect(index: number): boolean {
    return this.answers[index] === this.questions[index]?.correctAnswerIndex;
  }

  getScoreIcons(): string {
    switch (this.score) {
      case 1:
        return '🌟';
      case 2:
        return '🌟🌟';
      case 3:
        return '🌟🌟🌟';
      case 4:
        return '🌟🌟🌟🌟';
      case 5:
        return '🏆';
      default:
        return '';
    }
  }
}

