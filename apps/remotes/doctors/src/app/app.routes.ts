import { Route } from '@angular/router';

export const doctorsRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./doctors/doctors.routes').then((m) => m.doctorsRoutes),
  },
];
