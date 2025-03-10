import { Injectable } from '@angular/core';
import { ArmorCategory } from '../../models/Armor';
import { BaseItemCategoryBuilder } from '../../interfaces/BaseItemCategory';

@Injectable({
  providedIn: 'root',
})
export class ArmorService {
  constructor() {}

  public get categories(): Array<ArmorCategory> {
    // return Object.entries(ARMOR_METADATA).map(([armorType, data]) =>
    //   new ItemCategoryBuilder()
    //     .withName(armorType)
    //     .withSlug(armorType)
    //     .withDescription('')
    //     .build()
    // );
    return [];
  }
}
