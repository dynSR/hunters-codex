import { Injectable } from '@angular/core';
import { ARMOR_METADATA, ArmorCategory } from '../../models/Armor';

@Injectable({
  providedIn: 'root',
})
export class ArmorService {
  constructor() {}

  public get categories(): Array<ArmorCategory> {
    return Object.entries(ARMOR_METADATA).map(([armorType, data]) => ({
      name: armorType as Capitalize<string>,
      metadata: {
        slug: data.slug,
        icon: data.icon,
      },
    }));
  }
}
