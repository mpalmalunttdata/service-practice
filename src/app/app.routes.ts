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
    path: '*',
    redirectTo: 'activities',
  },
];
