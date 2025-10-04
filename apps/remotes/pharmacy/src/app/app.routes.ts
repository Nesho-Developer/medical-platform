import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pharmacy/pharmacy.routes').then((m) => m.pharmacyRoutes),
  },
];
