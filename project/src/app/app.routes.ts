import { Routes } from '@angular/router';
import { RouteInfo } from './shared/interfaces/RouteInfo';
import './shared/extensions/string.extension';
import { CaseFlags } from './shared/enums/case-flags';

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
    title: PageName.Home.toCase(CaseFlags.Titlecase),
    path: PageName.Home,
  },
  equipment: {
    title: PageName.Equipment.toCase(CaseFlags.Titlecase),
    path: PageName.Equipment,
  },
  world: {
    title: PageName.World.toCase(CaseFlags.Titlecase),
    path: PageName.World,
  },
  craftingList: {
    title: PageName.CraftingList.toCase(CaseFlags.Titlecase),
    path: PageName.CraftingList,
  },
  weaponList: {
    title: PageName.Weapons.toCase(CaseFlags.Titlecase),
    path: `${PageName.Equipment}/:category`,
  },
  weaponDetails: {
    title: PageName.Weapons.toCase(CaseFlags.Titlecase),
    path: `${PageName.Equipment}/:category/:slug`,
  },
  login: {
    title: PageName.Login.toCase(CaseFlags.Titlecase),
    path: PageName.Login,
  },
  logout: {
    title: PageName.Logout.toCase(CaseFlags.Titlecase),
    path: PageName.Logout,
  },
  signup: {
    title: PageName.SignUp.toCase(CaseFlags.Titlecase),
    path: PageName.SignUp,
  },
};

export const routes: Routes = [
  // Home, base path routes definition
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PageName.Home,
  },
  {
    path: routeDefinition[PageName.Home].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },

  // Equipment route definition
  {
    path: routeDefinition[PageName.Equipment].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/equipments/equipment.component').then(
        (c) => c.EquipmentComponent
      ),
  },

  // Weapon related routes definition
  {
    path: routeDefinition['weaponList'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/weapons/weapon-list/weapon-list.component').then(
        (c) => c.WeaponListComponent
      ),
  },
  {
    path: routeDefinition['weaponDetails'].path,
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/weapons/weapon-details/weapon-details.component').then(
        (c) => c.WeaponDetailsComponent
      ),
  },

  // Not found route definition
  {
    title: 'Not found',
    path: '**',
    loadComponent: () =>
      import('./shared/partials/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
