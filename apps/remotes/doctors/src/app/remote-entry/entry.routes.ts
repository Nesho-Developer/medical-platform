import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry, children: [

    {path: '', loadChildren: () => import('../doctors/doctors.routes').then(m => m.doctorsRoutes)}
  ] }];
