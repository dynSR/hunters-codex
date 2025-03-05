import { Injectable } from '@angular/core';
import {
  Weapon,
  WEAPON_METADATA,
  WeaponBuilder,
  WeaponCategory,
  WeaponType,
} from '../../models/stats/weapon/Weapon';
import { ItemCategoryBuilder } from '../../interfaces/items/ItemCategory';

export interface WeaponCategorySearchCriteria extends Partial<WeaponCategory> {}
export interface WeaponSearchCriteria extends Partial<Weapon> {}

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  constructor() {}

  public get categories(): Array<WeaponCategory> {
    return Object.entries(WEAPON_METADATA).map(([weaponType, data]) =>
      new ItemCategoryBuilder()
        .withName(weaponType as Capitalize<string>)
        .withMetadata({
          abbreviation: data.abbreviation ?? (weaponType as Uppercase<string>),
          slug: data.slug,
          icon: data.icon,
        })
        .build()
    );
  }

  public getCategoryByCriteria(name: string): WeaponCategory {
    return this.categories.filter((c) => c.name === name)[0];
  }

  public get weapons(): Array<Weapon> {
    return Object.entries(WEAPON_METADATA).map(([weaponType, data], index) =>
      new WeaponBuilder()
        .withId(index + 1)
        .withName(weaponType as Capitalize<string>)
        .withType(weaponType as Lowercase<WeaponType>)
        .withCategory(this.getCategoryByCriteria(weaponType))
        .withImage('')
        .withMetadata({
          abbreviation:
            data.abbreviation ??
            (weaponType.toLocaleUpperCase() as Uppercase<string>),
          slug: data.slug,
          icon: data.icon,
        })
        .build()
    );
  }

  public getWeaponsByCriteria(criteria: WeaponSearchCriteria): Array<Weapon> {
    return this.weapons.filter((weapon) =>
      Object.entries(criteria).every(
        ([key, value]) => weapon[key as keyof Weapon] === value
      )
    );
  }
}
