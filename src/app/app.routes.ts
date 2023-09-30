import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'master',
    loadComponent: () => import('master-page').then((m) => m.MasterPageComponent),
  },
];
