import { Injectable } from '@angular/core';
import { ARMOR_METADATA, ArmorCategory } from '../../models/armor';

@Injectable({
  providedIn: 'root',
})
export class ArmorService {
  constructor() {}

  public get categories(): Array<ArmorCategory> {
    return Object.entries(ARMOR_METADATA).map(([armorType, data]) => ({
      name: armorType,
      metadata: {
        slug: data.slug,
        icon: data.icon,
      },
    }));
  }
}
