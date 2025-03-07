import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import {
  EquipmentType,
  ItemService,
} from '../../shared/services/items/item.service';
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
import { CaseFlags } from '../../shared/enums/case-flags';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [FilterComponent, ItemCategoriesComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  @ViewChildren(FilterComponent) filterComponents!: QueryList<FilterComponent>;
  filters = new Array<Filter>();

  selectedFilter: Filter = {
    value: EquipmentType.Weapons,
  };
  private selectionSubscription = new Subscription();
  selectionGroup: SelectionGroup<FilterComponent> | null = null;

  readonly EquipmentType = EquipmentType;
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
      })
      .build();
  }

  private initEquipmentFilters(): void {
    const equipmentCategories = this.itemService.getEquipmentCategories();
    for (let i = 0; i < equipmentCategories.length; i++) {
      const category = equipmentCategories[i];

      this.filters.push({
        value: category.name.toCase(CaseFlags.Lowercase),
        icon: category.metadata.icon,
      });
    }
  }

  get equipmentCategories() {
    return this.itemService.getItemCategoriesBasedOnType(
      this.selectedFilter.value as EquipmentType
    );
  }
}
