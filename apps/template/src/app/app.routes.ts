import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  //Features Routes//
  {
    path: '',
    loadComponent: () =>
      import('./features/features.component').then((m) => m.FeaturesComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.routes),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./features/doctors/doctors.routes').then((m) => m.routes),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./features/patients/patients.routes').then((m) => m.routes),
      },
      {
        path: 'pharmacy',
        loadChildren: () =>
          import('./features/pharmacy/pharmacy.routes').then((m) => m.routes),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./features/pages/pages.routes').then((m) => m.routes),
      },

      {
        path: 'blog',
        loadChildren: () =>
          import('./features/blog/blog.routes').then((m) => m.routes),
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./features/error/error.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.routes').then((m) => m.routes),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then((m) => m.routes),
  },
  {
    path: 'pharmacy',
    loadChildren: () =>
      import('./pharmacy/pharmacy.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'error/error404',
    pathMatch: 'full',
  },
];
