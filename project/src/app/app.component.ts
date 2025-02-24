import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import './shared/extensions/string-extensions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'project';
}
