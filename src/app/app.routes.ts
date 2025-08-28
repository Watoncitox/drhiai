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
  {
    path: 'peluqueria',
    loadComponent: () => import('./peluqueria/peluqueria.page').then( m => m.PeluqueriaPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/servicios.page').then( m => m.ServiciosPage)
  },
];
