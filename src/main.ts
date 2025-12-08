import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('Error bootstrapping application:', err);
    // Display a user-friendly error message
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; background: #ef4444; color: white; padding: 20px; text-align: center; z-index: 10000;';
    errorDiv.innerHTML = '<h2>Application Error</h2><p>Failed to load the application. Please refresh the page or check the console for details.</p>';
    document.body.appendChild(errorDiv);
  });
