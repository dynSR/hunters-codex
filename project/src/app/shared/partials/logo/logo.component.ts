import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="app-logo">
      <a routerLink="/" aria-label="Home page">
        <img src="assets/icons/logo.svg" alt="App logo" />
      </a>
    </article>
  `,
  styles: `
    .app-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: var(--size-2gs);
    }
  `,
})
export class LogoComponent {}
