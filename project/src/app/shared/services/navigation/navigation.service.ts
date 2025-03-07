import { inject, Injectable, signal } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import '../../extensions/string.extension';

/**
 * Navigation context interface
 * @property fullUrl - The full URL from the navigation.
 * @property path - The path representation of the URL.
 */
interface NavigationContext {
  fullUrl: string;
  paths: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly router: Router = inject(Router);

  private readonly subject = new BehaviorSubject<NavigationContext>({
    fullUrl: '',
    paths: [],
  });
  urlObservable$ = this.subject.asObservable();

  loading = signal(false);

  constructor() {
    this.router.events.subscribe((e: Event) => {
      switch (true) {
        // Represents the start of the navigation process
        case e instanceof NavigationStart:
          this.loading.set(true);
          break;
        // Represents a successful navigation process - aka completed
        case e instanceof NavigationEnd:
          this.loading.set(false);

          this.subject.next({
            fullUrl: e.url,
            paths: this.getContextPath(e.url),
          });
          break;
        // Represents a failed navigation attempt
        case e instanceof NavigationError:
          this.loading.set(false);
          console.error('Navigation error:', e);
          break;
      }
    });
  }

  private getContextPath(url: string): string[] {
    const pathFromUrl = url.split('/').filter((s) => !s.isEmpty());
    return url === '/home' ? pathFromUrl : ['home', ...pathFromUrl];
  }
}
