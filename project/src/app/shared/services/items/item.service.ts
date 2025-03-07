import { inject, Injectable } from '@angular/core';
import { ItemCategory } from '../../interfaces/items/ItemCategory';
import { ArmorService } from './armor.service';
import { WeaponService } from './weapon.service';
import { WEAPONS_ICON_FOLDER_PATH } from '../../models/stats/weapon/Weapon';
import { ARMORS_ICON_FOLDER_PATH } from '../../models/Armor';

export enum EquipmentType {
  Weapons = 'weapons',
  Armors = 'armors',
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
        slug: EquipmentType.Weapons,
        metadata: {
          icon: WEAPONS_ICON_FOLDER_PATH + 'great-sword/great-sword-24.svg',
        },
      },
      {
        name: EquipmentType.Armors,
        slug: EquipmentType.Armors,
        metadata: {
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
