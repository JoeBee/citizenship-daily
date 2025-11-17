import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultsComponent } from './components/results/results.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];
