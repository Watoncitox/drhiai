import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'masoterapia',
    loadComponent: () => import('./masoterapia/masoterapia.page').then( m => m.MasoterapiaPage)
  },
];
