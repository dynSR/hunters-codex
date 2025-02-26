import { Routes } from '@angular/router';
import { RouteInfo } from './shared/interfaces/route-info';

export const routeDefinition: { [key: string]: RouteInfo } = {
  home: {
    title: 'Home',
    path: '',
  },
  equipment: {
    title: 'Equipment',
    path: 'equipment',
  },
  world: {
    title: 'World',
    path: 'world',
  },
  craftingList: {
    title: 'Crafting List',
    path: 'crafting-list',
  },
  login: {
    title: 'Log in',
    path: 'login',
  },
  logout: {
    title: 'Log out',
    path: 'logout',
  },
  signup: {
    title: 'Sign up',
    path: 'signup',
  },
  userProfile: {
    title: 'User profile',
    path: 'profile',
  },
};

export const routes: Routes = [
  {
    title: routeDefinition['home'].title,
    path: routeDefinition['home'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    title: routeDefinition['equipment'].title,
    path: routeDefinition['equipment'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/equipment/equipment.component').then(
        (c) => c.EquipmentComponent
      ),
  },
  {
    title: routeDefinition['world'].title,
    path: routeDefinition['world'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/world/world.component').then((c) => c.WorldComponent),
  },
  {
    title: routeDefinition['craftingList'].title,
    path: routeDefinition['craftingList'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/crafting-list/crafting-list.component').then(
        (c) => c.CraftingListComponent
      ),
  },
  {
    title: routeDefinition['userProfile'].title,
    path: routeDefinition['userProfile'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/user/user-profile/user-profile.component').then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    title: 'Error 404',
    path: '404',
    loadComponent: () =>
      import('./shared/partials/errors/error-404/error-404.component').then(
        (c) => c.Error404Component
      ),
  },
  {
    title: 'Error 500',
    path: '500',
    loadComponent: () =>
      import('./shared/partials/errors/error-500/error-500.component').then(
        (c) => c.Error500Component
      ),
  },
  {
    title: 'Wildcard',
    path: '**',
    loadComponent: () =>
      import('./shared/partials/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
