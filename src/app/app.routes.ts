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

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/activities-signals/activities').then(
            (c) => c.ActivitiesSignalsComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/activity/activity').then((c) => c.ActivityComponent),
      },
    ],
  },
  {
    path: '*',
    redirectTo: 'activities',
  },
];
