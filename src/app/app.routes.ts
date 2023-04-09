import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bigbang',
    pathMatch: 'full',
  },
  {
    path: 'bigbang',
    loadComponent: () => import('./pages/bigbang/bigbang.page').then( m => m.BigbangPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
