import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import './shared/extensions/string-extensions';
import { HeaderComponent } from './shared/partials/header/header.component';
import { BreadcrumbComponent } from './shared/partials/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'project';
}
