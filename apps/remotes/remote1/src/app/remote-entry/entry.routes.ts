import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login').then((m) => m.Login),
      },
      {
        path: 'welcome',
        loadComponent: () => import('./nx-welcome').then((m) => m.NxWelcome),
      },
    ],
  },
];
