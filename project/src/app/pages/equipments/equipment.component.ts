import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import {
  Filter,
  FilterComponent,
} from '../../shared/components/filter/filter.component';
import { Subscription } from 'rxjs';
import {
  SelectionGroup,
  SelectionGroupBuilder,
} from '../../shared/components/selection-group/selection-group';
import '../../shared/extensions/string.extension';
import { ItemCategoriesComponent } from '../../shared/components/item-categories/item-categories.component';
import { ItemCategoryService } from '../../shared/services/item-category/item-category.service';
import { BaseItemType } from '../../shared/interfaces/BaseItem';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [FilterComponent, ItemCategoriesComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  @ViewChildren(FilterComponent) filterComponents!: QueryList<
    FilterComponent<BaseItemType>
  >;
  filters = new Array<Filter<BaseItemType>>();

  selectedFilter: Filter<BaseItemType> = {
    value: BaseItemType.Weapons,
  };
  private selectionSubscription = new Subscription();
  selectionGroup: SelectionGroup<FilterComponent<BaseItemType>> | null = null;

  readonly EquipmentType = BaseItemType;
  private readonly itemCategoryService = inject(ItemCategoryService);

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
    this.selectionGroup = new SelectionGroupBuilder<
      FilterComponent<BaseItemType>
    >()
      .withSelectionGroup(this.filterComponents.toArray())
      .withCurrentSelection(this.filterComponents.first)
      .withSelectionAction((selection) => {
        this.selectedFilter = selection.filter;
      })
      .build();
  }

  private initEquipmentFilters(): void {
    const equipmentCategories =
      this.itemCategoryService.baseItemCategories.filter(
        (c) =>
          !c.name.equals(BaseItemType.None) &&
          !c.name.equals(BaseItemType.Items)
      );

    for (let i = 0; i < equipmentCategories.length; i++) {
      const category = equipmentCategories[i];

      this.filters.push({
        value: category.name as BaseItemType,
        icon: category.icon,
      });
    }
  }

  get weaponCategories() {
    return this.itemCategoryService.weaponCategories;
  }

  get armorCategories() {
    return this.itemCategoryService.armorCategories;
  }
}
