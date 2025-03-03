import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import {
  EquipmentType,
  ItemService,
} from '../../shared/services/items/item.service';
import {
  Filter,
  FilterComponent,
} from '../../shared/components/filter/filter.component';
import { CardComponent } from '../../shared/components/cards/card.component';
import { ItemCategory } from '../../shared/interfaces/items/item-category';
import { CardItem } from '../../shared/interfaces/cards/card-item';
import { Subscription } from 'rxjs';
import {
  SelectionGroup,
  SelectionGroupBuilder,
} from '../../shared/components/selection-group/selection-group.component';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CardComponent, FilterComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  @ViewChildren(FilterComponent) filterComponents!: QueryList<FilterComponent>;
  filters = new Array<Filter>();
  private selectedFilter: Filter = { value: EquipmentType.Weapons };
  private selectionSubscription = new Subscription();
  selectionGroup: SelectionGroup<FilterComponent> | null = null;

  itemCategories = new Array<ItemCategory>();
  cardItems = new Array<CardItem>();

  private readonly maxItemPerRow = 7;
  firstRow = new Array<CardItem>();
  secondRow = new Array<CardItem>();

  private readonly itemService = inject(ItemService);

  constructor() {}

  ngOnInit() {
    this.initEquipmentFilters();
  }

  ngAfterViewInit() {
    this.initSelectionGroup();
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
    this.selectionGroup?.onDestroy();
  }

  private initSelectionGroup(): void {
    this.selectionGroup = new SelectionGroupBuilder<FilterComponent>()
      .withSelectionGroup(this.filterComponents.toArray())
      .withCurrentSelection(this.filterComponents.first)
      .withSelectionAction((selection) => {
        this.selectedFilter = selection.filter;
        this.setCardItems(this.selectedFilter.value as EquipmentType);
      })
      .build();
  }

  private initEquipmentFilters(): void {
    const equipmentCategories = this.itemService.getEquipmentCategories();

    for (let i = 0; i < equipmentCategories.length; i++) {
      const category = equipmentCategories[i];

      this.filters.push({
        value: category.name.toLocaleUpperCase(),
        icon: category.metadata.icon,
      });
    }

    this.setCardItems(this.selectedFilter.value as EquipmentType);
  }

  public setCardItems(type: EquipmentType): void {
    this.itemCategories = this.itemService.getItemCategoriesBasedOnType(type);
    this.cardItems = [];

    for (let i = 0; i < this.itemCategories.length; i++) {
      const category = this.itemCategories[i];

      this.cardItems.push({
        header: {
          headline:
            category.metadata.abbreviation ?? category.name.toLocaleUpperCase(),
          icon: category.metadata.icon ?? 'not-found',
        },
        body: {
          image: '',
        },
        footer: {
          isDisplayed: false,
        },
        isClickable: true,
        routerLink: category.metadata.slug,
      });
    }

    /* 
      For display purposes, we halve the card items by the maxItemPerRow.
    */
    this.firstRow = this.cardItems.slice(0, this.maxItemPerRow);
    if (this.cardItems.length > this.maxItemPerRow) {
      this.secondRow = this.cardItems.slice(this.maxItemPerRow);
    } else {
      this.secondRow = [];
    }
  }
}
