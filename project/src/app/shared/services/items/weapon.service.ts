import { Injectable } from '@angular/core';
import { Weapon, WEAPON_METADATA, WeaponCategory } from '../../models/weapon';

export interface WeaponSearchCriteria extends Partial<Weapon> {}

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  constructor() {}

  public get categories(): Array<WeaponCategory> {
    return Object.entries(WEAPON_METADATA).map(([weaponType, data]) => ({
      name: weaponType,
      metadata: {
        abbreviation: data.abbreviation,
        slug: data.slug,
        icon: data.icon,
      },
    }));
  }

  public get weapons(): Array<Weapon> {
    return Object.entries(WEAPON_METADATA).map(([weaponType, data], index) => ({
      id: index,
      name: weaponType,
      type: Object.entries(WEAPON_METADATA)[0][0], // used for test purposes, return only GreatSword as type.
      image: '',
      metadata: {
        abbreviation: data.abbreviation,
        slug: data.slug,
        icon: data.icon,
      },
    }));
  }

  public getWeaponsByCriteria(criteria: WeaponSearchCriteria): Array<Weapon> {
    return this.weapons.filter((weapon) =>
      Object.entries(criteria).every(
        ([key, value]) => weapon[key as keyof Weapon] === value
      )
    );
  }
}
