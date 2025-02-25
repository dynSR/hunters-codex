import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavbarComponent, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
