import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

interface LinkProps {
  name: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  private readonly navigationService = inject(NavigationService);
  private navUrlSubscription = new Subscription();
  breadcrumbItems: Array<LinkProps> = [];

  ngOnInit() {
    this.navUrlSubscription = this.navigationService.urlObservable.subscribe(
      (context) => {
        this.breadcrumbItems = [];

        for (let i = 0; i < context.path.length; i++) {
          const element = context.path[i];
          this.breadcrumbItems.push({
            name: element,
            url: element,
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.navUrlSubscription.unsubscribe();
  }
}
