import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'activities',
  },
  {
    path: 'activities',
    loadComponent: () =>
      import('./features/activities/activities').then((c) => c.ActivitiesComponent),
  },

  {
    path: 'activities-s',
    loadComponent: () =>
      import('./features/activities-signals/activities').then((c) => c.ActivitiesSignalsComponent),
  },

  {
    path: '*',
    redirectTo: 'activities',
  },
];
