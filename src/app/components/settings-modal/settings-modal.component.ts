import { Component, OnInit, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-settings-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './settings-modal.component.html',
  styleUrl: './settings-modal.component.css'
})
export class SettingsModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() darkModeChanged = new EventEmitter<boolean>();

  darkMode = signal(false);

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    const settings = this.storageService.getSettings();
    this.darkMode.set(settings.darkMode);
    this.updateDarkModeClass();
  }

  toggleDarkMode(): void {
    this.darkMode.set(!this.darkMode());
    const settings = { darkMode: this.darkMode() };
    this.storageService.saveSettings(settings);
    this.updateDarkModeClass();
    this.darkModeChanged.emit(this.darkMode());
  }

  private updateDarkModeClass(): void {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}

