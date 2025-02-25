import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./shared/partials/errors/error-404/error-404.component').then(
        (c) => c.Error404Component
      ),
  },
  {
    path: '500',
    loadComponent: () =>
      import('./shared/partials/errors/error-500/error-500.component').then(
        (c) => c.Error500Component
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/partials/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
