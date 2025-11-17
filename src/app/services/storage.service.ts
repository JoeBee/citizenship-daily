import { Injectable } from '@angular/core';

export interface QuizState {
  quizDate: string;
  currentQuestionIndex: number;
  answers: number[]; // -1 means unanswered
}

export interface Stats {
  gamesPlayed: number;
  currentStreak: number;
  maxStreak: number;
  scoreDistribution: {
    '0': number;
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
  };
  lastPlayedDate: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly QUIZ_STATE_KEY = 'citizenshipDaily_quizState';
  private readonly STATS_KEY = 'citizenshipDaily_stats';
  private readonly SETTINGS_KEY = 'citizenshipDaily_settings';

  getQuizState(): QuizState | null {
    const stored = localStorage.getItem(this.QUIZ_STATE_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  saveQuizState(state: QuizState): void {
    localStorage.setItem(this.QUIZ_STATE_KEY, JSON.stringify(state));
  }

  clearQuizState(): void {
    localStorage.removeItem(this.QUIZ_STATE_KEY);
  }

  getStats(): Stats {
    const stored = localStorage.getItem(this.STATS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      gamesPlayed: 0,
      currentStreak: 0,
      maxStreak: 0,
      scoreDistribution: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
      lastPlayedDate: null
    };
  }

  saveStats(stats: Stats): void {
    localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
  }

  updateStats(score: number, quizDate: string): void {
    const stats = this.getStats();
    stats.gamesPlayed++;
    
    // Update streak
    if (stats.lastPlayedDate) {
      const lastDate = new Date(stats.lastPlayedDate);
      const currentDate = new Date(quizDate);
      const daysDiff = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === 1) {
        stats.currentStreak++;
      } else if (daysDiff > 1) {
        stats.currentStreak = 1;
      }
      // If daysDiff === 0, same day, don't update streak
    } else {
      stats.currentStreak = 1;
    }
    
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    stats.lastPlayedDate = quizDate;
    
    // Update score distribution
    const scoreKey = String(score) as keyof typeof stats.scoreDistribution;
    stats.scoreDistribution[scoreKey]++;
    
    this.saveStats(stats);
  }

  getSettings(): { darkMode: boolean } {
    const stored = localStorage.getItem(this.SETTINGS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return { darkMode: false };
  }

  saveSettings(settings: { darkMode: boolean }): void {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
  }
}

