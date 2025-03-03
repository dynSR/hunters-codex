import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation/navigation.service';
import { PageName, routeDefinition } from '../../../app.routes';

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
  @Input({ required: true }) isDisplayed!: boolean;

  private navUrlSubscription = new Subscription();
  breadcrumbItems: Array<LinkProps> = [];

  private readonly navigationService = inject(NavigationService);

  ngOnInit() {
    this.navUrlSubscription = this.navigationService.urlObservable$.subscribe(
      (context) => {
        this.breadcrumbItems = [];

        if (context.path.length === 1) {
          this.breadcrumbItems = [
            {
              name: routeDefinition[PageName.Home].title,
              url: routeDefinition[PageName.Home].path,
            },
          ];
          return;
        }

        for (let i = 0; i < context.path.length; i++) {
          const element = context.path[i];
          const previousElement = context.path[i - 1];
          let url = element;

          if (
            previousElement &&
            previousElement !== routeDefinition[PageName.Home].path
          ) {
            url = previousElement + '/' + element;
          }

          this.breadcrumbItems.push({
            name: element,
            url: url,
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.navUrlSubscription.unsubscribe();
  }
}
