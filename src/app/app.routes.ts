import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { AppShell } from './core/layout/app-shell';
import { authRoutes } from './features/auth/auth.routes';
import { tripsRoutes } from './features/trips/trips.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  ...authRoutes,
  {
    path: '',
    component: AppShell,
    canActivate: [authGuard],
    children: tripsRoutes,
  },
  { path: '**', redirectTo: 'trips' },
];
