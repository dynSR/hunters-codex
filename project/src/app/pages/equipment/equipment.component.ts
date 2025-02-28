import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import {
  DEFAULT_EQUIPMENT_CATEGORY,
  ItemService,
} from '../../shared/services/item.service';
import {
  Filter,
  FilterComponent,
} from '../../shared/components/filter/filter.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ItemCategory } from '../../shared/interfaces/items/item-category';
import { CardItem } from '../../shared/interfaces/card-item';
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
  private selectedFilter: ItemCategory = DEFAULT_EQUIPMENT_CATEGORY;
  private selectionSubscription = new Subscription();
  selectionGroup: SelectionGroup<FilterComponent> | null = null;

  categories = new Array<ItemCategory>();
  cardItems = new Array<CardItem>();

  itemService = inject(ItemService);

  constructor() {}

  ngOnInit() {
    this.initEquipmentFilters();
  }

  ngAfterViewInit() {
    this.selectionGroup = new SelectionGroupBuilder<FilterComponent>()
      .withCurrentSelection(this.filterComponents.first)
      .withSelectionGroup(this.filterComponents.toArray())
      .withOnSelectionAction((selection) => {
        this.selectedFilter = selection.filter;
        console.log(`on selection group item: ${this.selectedFilter.name}`);
        this.setCardItems(this.selectedFilter);
      })
      .build();
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
    this.selectionGroup?.onDestroy();
  }

  private initEquipmentFilters(): void {
    const equipmentCategories = this.itemService.getEquipmentCategories();
    for (let i = 0; i < equipmentCategories.length; i++) {
      const category = equipmentCategories[i];
      this.filters.push({
        name: category.name.toString().toLocaleUpperCase(),
        icon: category.icon,
      });
    }

    this.setCardItems(this.selectedFilter);
  }

  public setCardItems(category: ItemCategory): void {
    console.log(`setCardItems with ${category.name}`);
    this.categories = this.itemService.getItemCategories(category);
    console.log(`categories found: ${JSON.stringify(this.categories)}`);

    this.cardItems = [];
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i];
      this.cardItems.push({
        name: category.name.toString().toLocaleUpperCase(),
        image: category.icon,
      });
    }
  }
}
