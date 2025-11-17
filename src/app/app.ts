import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsModalComponent } from './components/stats-modal/stats-modal.component';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { IconComponent } from './shared/icon.component';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatsModalComponent, SettingsModalComponent, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Citizenship Daily');
  showStatsModal = signal(false);
  showSettingsModal = signal(false);

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    // Load dark mode preference on app start
    const settings = this.storageService.getSettings();
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    }
  }

  openStats(): void {
    this.showStatsModal.set(true);
  }

  closeStats(): void {
    this.showStatsModal.set(false);
  }

  openSettings(): void {
    this.showSettingsModal.set(true);
  }

  closeSettings(): void {
    this.showSettingsModal.set(false);
  }

  onDarkModeChanged(darkMode: boolean): void {
    // Dark mode is already handled in settings component
  }
}
