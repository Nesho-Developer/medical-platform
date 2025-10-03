import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/error/error.component').then(
        (m) => m.ErrorComponent,
      ),
    children: [
      {
        path: 'error404',
        loadComponent: () =>
          import('../../features/error/error404/error404.component').then(
            (m) => m.Error404Component,
          ),
      },
      {
        path: 'error500',
        loadComponent: () =>
          import('../../features/error/error500/error500.component').then(
            (m) => m.Error500Component,
          ),
      },
    ],
  },
];
