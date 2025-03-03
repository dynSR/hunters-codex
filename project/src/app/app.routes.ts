import { Routes } from '@angular/router';
import { RouteInfo } from './shared/interfaces/route-info';

export enum PageName {
  Home = 'home',
  Equipment = 'equipment',
  World = 'world',
  CraftingList = 'crafting-list',
  Weapons = 'weapons',
  Login = 'login',
  Logout = 'logout',
  SignUp = 'signup',
}

export const routeDefinition: { [key: string]: RouteInfo } = {
  home: {
    title: PageName.Home.toCapitalized(),
    path: PageName.Home,
  },
  equipment: {
    title: PageName.Equipment.toCapitalized(),
    path: PageName.Equipment,
  },
  world: {
    title: PageName.World.toCapitalized(),
    path: PageName.World,
  },
  craftingList: {
    title: PageName.CraftingList.fromKebabCaseToCapitals(),
    path: PageName.CraftingList,
  },
  weapons: {
    title: PageName.Weapons.toCapitalized(),
    path: PageName.Weapons,
  },
  login: {
    title: PageName.Login.toCapitalized(),
    path: PageName.Login,
  },
  logout: {
    title: PageName.Logout.toCapitalized(),
    path: PageName.Logout,
  },
  signup: {
    title: PageName.SignUp.toCapitalized(),
    path: PageName.SignUp,
  },
  userProfile: {
    title: 'User profile',
    path: 'profile',
  },
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
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
      import('./pages/equipments/equipment.component').then(
        (c) => c.EquipmentComponent
      ),
  },
  {
    title: routeDefinition['equipment'].title,
    path: routeDefinition['equipment'].path + '/:category',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/weapons/weapon-list/weapon-list.component').then(
        (c) => c.WeaponListComponent
      ),
  },
  // {
  //   title: routeDefinition['weapons'].title,
  //   path: routeDefinition['weapons'].path + '/{id}',
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./pages/weapons/weapon-details/weapon-details.component').then(
  //       (c) => c.WeaponDetailsComponent
  //     ),
  // },
  // {
  //   title: routeDefinition['world'].title,
  //   path: routeDefinition['world'].path,
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./pages/world/world.component').then((c) => c.WorldComponent),
  // },
  // {
  //   title: routeDefinition['craftingList'].title,
  //   path: routeDefinition['craftingList'].path,
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./pages/crafting-list/crafting-list.component').then(
  //       (c) => c.CraftingListComponent
  //     ),
  // },
  {
    title: routeDefinition['userProfile'].title,
    path: routeDefinition['userProfile'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/users/user-profile/user-profile.component').then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    title: routeDefinition['login'].title,
    path: routeDefinition['login'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    title: routeDefinition['signup'].title,
    path: routeDefinition['signup'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./auth/signup/signup.component').then((c) => c.SignupComponent),
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
    title: 'Not found',
    path: '**',
    loadComponent: () =>
      import('./shared/partials/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
