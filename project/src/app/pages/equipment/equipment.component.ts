import { Component, inject } from '@angular/core';
import { ItemService } from '../../shared/services/item.service';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { Item } from '../../shared/interfaces/items/item';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  filters = new Array<FilterComponent<string | number>>();
  categories = new Array<CardComponent<Item>>();

  itemCategoryService = inject(ItemService);

  constructor() {}

  ngOnInit() {
    this.filters = [
      {
        name: 'Test',
        icon: '',
      },
      {
        name: 'Test1',
        icon: '',
      },
      {
        name: 'Test2',
        icon: '',
      },
    ];
    this.categories = this.itemCategoryService.getWeaponCategories();
  }
}
