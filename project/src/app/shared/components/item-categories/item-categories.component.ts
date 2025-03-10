import { Component, Input } from '@angular/core';
import { CardComponent } from '../cards/card.component';
import { CardItem } from '../../interfaces/cards/CardItem';
import '../../extensions/string.extension';
import { BaseItemCategory } from '../../interfaces/BaseItemCategory';
import { BaseItemType } from '../../interfaces/BaseItem';

@Component({
  selector: 'app-item-categories',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div [class]="className">
      <div class="grid">
        @for (cardItem of cardItems; track $index) {
        <app-card [item]="cardItem" class="cell is-fluid" />
        }
      </div>
    </div>
  `,
})
export class ItemCategoriesComponent {
  @Input({ required: true }) categories!: Array<BaseItemCategory>;
  @Input({ required: false }) filter: string = BaseItemType.Weapons;
  cardItems = new Array<CardItem>();

  protected className = 'container is-fluid fixed-grid has-7-cols p-0';

  ngOnInit() {
    this.setCardItems(this.categories);
  }

  private setCardItems(categories: Array<BaseItemCategory>): void {
    this.cardItems = [];

    console.log(categories);

    categories.forEach((category) =>
      this.cardItems.push({
        header: {
          headline: category.name.toAbbreviation(),
          icon: category.icon ?? 'not-found',
        },
        body: {
          image: 'https://bulma.io/assets/images/placeholders/600x480.png',
        },
        footer: {
          isDisplayed: false,
        },
        isClickable: true,
        routerLink: category.slug,
      })
    );

    if (this.filter.equals(BaseItemType.Armors)) {
      this.className = `container is-fluid fixed-grid has-${6}-cols p-0`;
    }
  }
}
