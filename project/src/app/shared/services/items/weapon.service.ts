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
        .withName(weaponType)
        .withSlug(weaponType)
        .withDescription('')
        .withMetadata({
          abbreviation: data.abbreviation,
          icon: data.icon,
        })
        .build()
    );
  }

  public getCategoryByCriteria(
    criteria: WeaponCategorySearchCriteria
  ): WeaponCategory {
    return this.categories.filter((weapon) =>
      Object.entries(criteria).every(
        ([key, value]) => weapon[key as keyof WeaponCategory] === value
      )
    )[0];
  }

  /**
   * Temporary solution to get some weapons for test and front implementation purposes.
   */
  public get weapons(): Array<Weapon> {
    return Object.entries(WEAPON_METADATA).map(([weaponType, data], index) =>
      new WeaponBuilder()
        .withId(index + 1)
        .withName(weaponType)
        .withSlug(weaponType as Lowercase<WeaponType>)
        .withType(weaponType as Lowercase<WeaponType>)
        .withDescription(
          'Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis duis torquent per ex odio nibh mauris, donec diam suscipit mi dui id lacus in cras metus venenatis et eu.Metus mauris mattis per dui phasellus turpis montes eget iaculis malesuada mi dictum facilisi, nullam id nostra integer primis imperdiet lacinia pellentesque curae vulputate lectus.'
        )
        .withCategory(this.getCategoryByCriteria({ name: weaponType }))
        .withImage('https://bulma.io/assets/images/placeholders/600x480.png')
        .withMetadata({
          abbreviation: data.abbreviation ?? weaponType.toLocaleUpperCase(),
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

  public getWeaponByCriteria(criteria: WeaponSearchCriteria): Weapon {
    return this.getWeaponsByCriteria(criteria)[0];
  }
}
