import { Injectable } from '@angular/core';
import {
  BaseItemCategory,
  BaseItemCategoryBuilder,
} from '../../interfaces/BaseItemCategory';
import '../../extensions/string.extension';
import { WeaponType } from '../../models/Weapon';
import { CaseFlags } from '../../enums/case-flags';
import { ArmorCategory, ArmorType } from '../../models/Armor';
import {
  WeaponCategory,
  WeaponCategoryBuilder,
} from '../../models/WeaponCategory';
import { ArmorCategoryBuilder } from '../../models/ArmorCategory';
import { BaseItemType } from '../../interfaces/BaseItem';

/**
 * This service is used to fetch categories for any type of item, such as base item, weapons, armors, items.
 */

@Injectable({
  providedIn: 'root',
})
export class ItemCategoryService {
  constructor() {}

  /**
   * This function is used to retrieve base item categories.
   * @returns Some base item categories based on the enum ItemType
   */
  public get baseItemCategories(): Array<BaseItemCategory> {
    return Object.values(BaseItemType).map((type) =>
      new BaseItemCategoryBuilder()
        .withName(type)
        .withSlug(type.toCase(CaseFlags.Kebabcase | CaseFlags.Lowercase))
        .withDescription('')
        .withIcon(`/assets/icons/categories/${type}/${type}-24.svg`)
        .build()
    );
  }

  /**
   * This function is used to retrieve weapon categories.
   * @returns Some weapon categories based on the enum WeaponType.
   */
  public get weaponCategories(): Array<WeaponCategory> {
    return Object.values(WeaponType)
      .filter((cat) => cat !== WeaponType.None)
      .map((weaponType) =>
        new WeaponCategoryBuilder(weaponType)
          .withName(weaponType)
          .withSlug(weaponType)
          .withIcon(`/assets/icons/${weaponType}/${weaponType}-48.svg`)
          .withDescription('')
          .build()
      );
  }

  /**
   * This function is used to retrieve armor item categories.
   * @returns Some armor categories based on the enum ArmorType.
   */
  public get armorCategories(): Array<ArmorCategory> {
    return Object.values(ArmorType)
      .filter((cat) => cat !== ArmorType.None)
      .map((armorType) =>
        new ArmorCategoryBuilder(armorType)
          .withName(armorType)
          .withSlug(armorType)
          .withIcon(`/assets/icons/${armorType}/${armorType}-48.svg`)
          .withDescription('')
          .build()
      );
  }
}
