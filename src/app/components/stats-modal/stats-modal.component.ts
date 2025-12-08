import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService, Stats } from '../../services/storage.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-stats-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './stats-modal.component.html',
  styleUrl: './stats-modal.component.css'
})
export class StatsModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  stats: Stats | null = null;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.stats = this.storageService.getStats();
  }

  closeModal(): void {
    this.close.emit();
  }

  getPercentage(score: number): number {
    if (!this.stats || this.stats.gamesPlayed === 0) return 0;
    const count = this.stats.scoreDistribution[String(score) as keyof typeof this.stats.scoreDistribution];
    return Math.round((count / this.stats.gamesPlayed) * 100);
  }

  getMaxCount(): number {
    if (!this.stats) return 0;
    return Math.max(...Object.values(this.stats.scoreDistribution));
  }

  getBarWidth(score: number): number {
    const max = this.getMaxCount();
    if (max === 0) return 0;
    const count = this.getScoreCount(score);
    return Math.round((count / max) * 100);
  }

  getScoreCount(score: number): number {
    if (!this.stats) return 0;
    const scoreKey = String(score) as keyof typeof this.stats.scoreDistribution;
    return this.stats.scoreDistribution[scoreKey];
  }
}

