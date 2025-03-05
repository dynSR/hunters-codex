import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routeDefinition, routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouteInfo } from '../../interfaces/RouteInfo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly equipmentRoute: RouteInfo = routeDefinition['equipment'];
  readonly worldRoute: RouteInfo = routeDefinition['world'];
  readonly craftingListRoute: RouteInfo = routeDefinition['craftingList'];
}
