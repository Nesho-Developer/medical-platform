import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'index',
        loadComponent: () =>
          import(
            '../../features/home/general-home/general-home.component'
          ).then((m) => m.GeneralHomeComponent),
      },
      {
        path: 'home1',
        loadComponent: () =>
          import('../../features/home/home1/home1.component').then(
            (m) => m.Home1Component,
          ),
      },
      {
        path: 'home2',
        loadComponent: () =>
          import('../../features/home/home2/home2.component').then(
            (m) => m.Home2Component,
          ),
      },
      {
        path: 'home3',
        loadComponent: () =>
          import('../../features/home/home3/home3.component').then(
            (m) => m.Home3Component,
          ),
      },
      {
        path: 'home4',
        loadComponent: () =>
          import('../../features/home/home4/home4.component').then(
            (m) => m.Home4Component,
          ),
      },
      {
        path: 'home5',
        loadComponent: () =>
          import('../../features/home/home5/home5.component').then(
            (m) => m.Home5Component,
          ),
      },
      {
        path: 'home6',
        loadComponent: () =>
          import('../../features/home/home6/home6.component').then(
            (m) => m.Home6Component,
          ),
      },
      {
        path: 'home7',
        loadComponent: () =>
          import('../../features/home/home7/home7.component').then(
            (m) => m.Home7Component,
          ),
      },
      {
        path: 'home8',
        loadComponent: () =>
          import('../../features/home/home8/home8.component').then(
            (m) => m.Home8Component,
          ),
      },
      {
        path: 'home9',
        loadComponent: () =>
          import('../../features/home/home9/home9.component').then(
            (m) => m.Home9Component,
          ),
      },
      {
        path: 'home10',
        loadComponent: () =>
          import('../../features/home/home10/home10.component').then(
            (m) => m.Home10Component,
          ),
      },
      {
        path: 'home11',
        loadComponent: () =>
          import('../../features/home/home11/home11.component').then(
            (m) => m.Home11Component,
          ),
      },
      {
        path: 'home12',
        loadComponent: () =>
          import('../../features/home/home12/home12.component').then(
            (m) => m.Home12Component,
          ),
      },
      {
        path: 'home13',
        loadComponent: () =>
          import('../../features/home/home13/home13.component').then(
            (m) => m.Home13Component,
          ),
      },
      {
        path: 'home14',
        loadComponent: () =>
          import('../../features/home/home14/home14.component').then(
            (m) => m.Home14Component,
          ),
      },
    ],
  },
];
