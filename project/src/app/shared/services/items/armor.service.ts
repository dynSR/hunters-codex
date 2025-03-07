import { Injectable } from '@angular/core';
import { ARMOR_METADATA, ArmorCategory } from '../../models/Armor';
import { ItemCategoryBuilder } from '../../interfaces/items/ItemCategory';

@Injectable({
  providedIn: 'root',
})
export class ArmorService {
  constructor() {}

  public get categories(): Array<ArmorCategory> {
    return Object.entries(ARMOR_METADATA).map(([armorType, data]) =>
      new ItemCategoryBuilder()
        .withName(armorType)
        .withSlug(armorType)
        .withDescription('')
        .withMetadata({
          abbreviation: armorType.toLocaleUpperCase(),
          icon: data.icon,
        })
        .build()
    );
  }
}
