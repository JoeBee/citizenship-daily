import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { StatsModalComponent } from './components/stats-modal/stats-modal.component';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { IconComponent } from './shared/icon.component';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoModalComponent, StatsModalComponent, SettingsModalComponent, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Citizenship Daily');
  showInfoModal = signal(false);
  showStatsModal = signal(false);
  showSettingsModal = signal(false);

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    try {
      // Load dark mode preference on app start
      const settings = this.storageService.getSettings();
      if (settings.darkMode) {
        document.documentElement.classList.add('dark');
      }
    } catch (error) {
      console.error('Error initializing app:', error);
    }

    // Check if service worker is causing issues
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          console.log('Service worker registered:', registration.scope);
        }
      }).catch(err => {
        console.warn('Error checking service workers:', err);
      });
    }
  }

  openInfo(): void {
    this.showInfoModal.set(true);
  }

  closeInfo(): void {
    this.showInfoModal.set(false);
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
