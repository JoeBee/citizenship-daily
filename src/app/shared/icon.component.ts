import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="'icon icon-' + name" [style.width.px]="name === 'flag' ? 28 : size" [style.height.px]="name === 'flag' ? 19 : size">
      @switch (name) {
        @case ('bar-chart-3') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3v18h18"/>
            <path d="M18 17V9"/>
            <path d="M13 17V5"/>
            <path d="M8 17v-3"/>
          </svg>
        }
        @case ('settings') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        }
        @case ('x') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        }
        @case ('check-circle') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        }
        @case ('x-circle') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m15 9-6 6"/>
            <path d="m9 9 6 6"/>
          </svg>
        }
        @case ('flag') {
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" style="display: block;">
            <!-- Red and white stripes (13 total: 7 red, 6 white) -->
            <rect x="0" y="0" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="1.54" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="3.08" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="4.62" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="6.16" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="7.7" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="9.24" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="10.78" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="12.32" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="13.86" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="15.4" width="30" height="1.54" fill="#bf0a30"/>
            <rect x="0" y="16.94" width="30" height="1.54" fill="#ffffff"/>
            <rect x="0" y="18.46" width="30" height="1.54" fill="#bf0a30"/>
            <!-- Blue canton (on top of stripes) -->
            <rect x="0" y="0" width="12" height="8" fill="#002868"/>
            <!-- Stars as small circles (5 rows, 6 stars per row, alternating) -->
            <g fill="#ffffff">
              <!-- Row 1: 6 stars -->
              <circle cx="1" cy="1.2" r="0.4"/>
              <circle cx="2.2" cy="1.2" r="0.4"/>
              <circle cx="3.4" cy="1.2" r="0.4"/>
              <circle cx="4.6" cy="1.2" r="0.4"/>
              <circle cx="5.8" cy="1.2" r="0.4"/>
              <circle cx="7" cy="1.2" r="0.4"/>
              <!-- Row 2: 5 stars (offset) -->
              <circle cx="1.6" cy="2.6" r="0.4"/>
              <circle cx="2.8" cy="2.6" r="0.4"/>
              <circle cx="4" cy="2.6" r="0.4"/>
              <circle cx="5.2" cy="2.6" r="0.4"/>
              <circle cx="6.4" cy="2.6" r="0.4"/>
              <!-- Row 3: 6 stars -->
              <circle cx="1" cy="4" r="0.4"/>
              <circle cx="2.2" cy="4" r="0.4"/>
              <circle cx="3.4" cy="4" r="0.4"/>
              <circle cx="4.6" cy="4" r="0.4"/>
              <circle cx="5.8" cy="4" r="0.4"/>
              <circle cx="7" cy="4" r="0.4"/>
              <!-- Row 4: 5 stars (offset) -->
              <circle cx="1.6" cy="5.4" r="0.4"/>
              <circle cx="2.8" cy="5.4" r="0.4"/>
              <circle cx="4" cy="5.4" r="0.4"/>
              <circle cx="5.2" cy="5.4" r="0.4"/>
              <circle cx="6.4" cy="5.4" r="0.4"/>
              <!-- Row 5: 6 stars -->
              <circle cx="1" cy="6.8" r="0.4"/>
              <circle cx="2.2" cy="6.8" r="0.4"/>
              <circle cx="3.4" cy="6.8" r="0.4"/>
              <circle cx="4.6" cy="6.8" r="0.4"/>
              <circle cx="5.8" cy="6.8" r="0.4"/>
              <circle cx="7" cy="6.8" r="0.4"/>
            </g>
          </svg>
        }
        @default {
          <!-- Fallback for unknown icons -->
        }
      }
    </span>
  `,
  styles: [`
    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .icon-flag svg {
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 2;
    }
  `]
})
export class IconComponent {
  @Input() name!: string;
  @Input() size: number = 24;
}

