import { inject, Injectable } from '@angular/core';
import '../../extensions/string-extensions';
import { ItemCategory } from '../../interfaces/items/item-category';
import { ArmorService } from './armor.service';
import { WeaponService } from './weapon.service';
import { WEAPONS_ICON_FOLDER_PATH } from '../../models/weapon';
import { ARMORS_ICON_FOLDER_PATH } from '../../models/armor';

export enum EquipmentType {
  Weapons = 'Weapons',
  Armors = 'Armors',
}
export interface EquipmentCategory extends ItemCategory {}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly armorService = inject(ArmorService);
  private readonly weaponService = inject(WeaponService);

  constructor() {}

  public getEquipmentCategories(): Array<EquipmentCategory> {
    return [
      {
        name: EquipmentType.Weapons,
        metadata: {
          slug: EquipmentType.Weapons.toLocaleLowerCase(),
          icon: WEAPONS_ICON_FOLDER_PATH + 'great-sword/great-sword-24.svg',
        },
      },
      {
        name: EquipmentType.Armors,
        metadata: {
          slug: EquipmentType.Armors.toLocaleLowerCase(),
          icon: ARMORS_ICON_FOLDER_PATH + 'chests/chests-24.svg',
        },
      },
    ];
  }

  public getItemCategoriesBasedOnType(
    type: EquipmentType
  ): Array<EquipmentCategory> {
    if (type.equals(EquipmentType.Weapons)) {
      return this.weaponService.categories;
    }

    return this.armorService.categories;
  }
}
