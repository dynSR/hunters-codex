import { inject, Injectable } from '@angular/core';
import '../../extensions/string.extension';
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
        name: EquipmentType.Weapons as Capitalize<string>,
        metadata: {
          slug: EquipmentType.Weapons.toLocaleLowerCase() as Lowercase<string>,
          icon: (WEAPONS_ICON_FOLDER_PATH +
            'great-sword/great-sword-24.svg') as Lowercase<string>,
        },
      },
      {
        name: EquipmentType.Armors as Capitalize<string>,
        metadata: {
          slug: EquipmentType.Armors.toLocaleLowerCase() as Lowercase<string>,
          icon: (ARMORS_ICON_FOLDER_PATH +
            'chests/chests-24.svg') as Lowercase<string>,
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
