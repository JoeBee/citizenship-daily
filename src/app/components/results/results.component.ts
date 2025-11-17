import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../services/quiz.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  score = 0;
  totalQuestions = 5;
  answers: number[] = [];
  questions: Question[] = [];
  quizDate = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.score !== undefined) {
      this.score = state.score;
      this.answers = state.answers || [];
      this.questions = state.questions || [];
      this.quizDate = state.quizDate || '';
    } else {
      // If no state, redirect to quiz
      this.router.navigate(['/']);
    }
  }

  shareResults(): void {
    const shareText = this.generateShareText();
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Results copied to clipboard!');
      }).catch(() => {
        this.fallbackCopy(shareText);
      });
    } else {
      this.fallbackCopy(shareText);
    }
  }

  private generateShareText(): string {
    const dateStr = this.quizDate || new Date().toISOString().split('T')[0];
    const scoreLine = `Score: ${this.score}/${this.totalQuestions}`;
    
    // Create emoji grid (5 squares in a row)
    const emojiGrid = this.answers.map((answer, index) => {
      const isCorrect = answer === this.questions[index]?.correctAnswerIndex;
      return isCorrect ? '✓' : '✗';
    }).join(' ');
    
    return `Citizenship Daily ${dateStr}\n${scoreLine}\n${emojiGrid}`;
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
      alert('Results copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textArea);
  }

  playAgain(): void {
    this.router.navigate(['/']);
  }

  isCorrect(index: number): boolean {
    return this.answers[index] === this.questions[index]?.correctAnswerIndex;
  }
}

