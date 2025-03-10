import { Injectable } from '@angular/core';
import { Weapon } from '../../models/Weapon';
import { WeaponCategory } from '../../models/WeaponCategory';

export interface WeaponCategorySearchCriteria extends Partial<WeaponCategory> {}
export interface WeaponSearchCriteria extends Partial<Weapon> {}

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  constructor() {}

  /**
   * Temporary solution to get some weapons for test and front implementation purposes.
   */
  public get weapons(): Array<Weapon> {
    return [];

    // new WeaponBuilder()
    //     .withId(index + 1)
    //     .withName(weaponType)
    //     .withSlug(weaponType)
    //     .withDescription(
    //       'Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis duis torquent per ex odio nibh mauris, donec diam suscipit mi dui id lacus in cras metus venenatis et eu.Metus mauris mattis per dui phasellus turpis montes eget iaculis malesuada mi dictum facilisi, nullam id nostra integer primis imperdiet lacinia pellentesque curae vulputate lectus.'
    //     )
    //     .withCategory(this.getCategoryByCriteria({ name: weaponType }))
    //     .withImage('https://bulma.io/assets/images/placeholders/600x480.png')
    //     .build()
    // );
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
