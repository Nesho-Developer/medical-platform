import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./patients/patients.routes').then((m) => m.patientsRoutes),
  },
];
