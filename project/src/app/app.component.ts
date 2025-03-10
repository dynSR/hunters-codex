import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/partials/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './shared/partials/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BreadcrumbComponent],
  template: `
    <app-navbar />

    <main class="container is-fluid is-paddingless">
      <app-breadcrumb [isDisplayed]="true" />
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  title: string = 'project';
}
