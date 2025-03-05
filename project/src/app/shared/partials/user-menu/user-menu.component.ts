import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteInfo } from '../../interfaces/RouteInfo';
import { routeDefinition } from '../../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  isUserConnected: boolean = false;
  userName: string = 'Dylan SCHUMACKER';
  readonly loginRoute: RouteInfo = routeDefinition['login'];
  readonly logoutRoute: RouteInfo = routeDefinition['logout'];
  readonly signupRoute: RouteInfo = routeDefinition['signup'];
  readonly userProfileRoute: RouteInfo = routeDefinition['userProfile'];
}
