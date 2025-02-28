import { Injectable } from '@angular/core';
import { ItemCategory } from '../interfaces/items/item-category';
import { WeaponCategory, WeaponType } from '../models/weapon';
import { ArmorCategory, ArmorType } from '../models/armor';
import '../extensions/string-extensions';
import { ItemType } from '../interfaces/items/item';

export enum EquipmentType {
  Weapons = 'Weapons',
  Armors = 'Armors',
  Charms = 'Charms',
}
export interface EquipmentCategory extends ItemCategory {}

export const DEFAULT_EQUIPMENT_CATEGORY: EquipmentCategory = {
  name: EquipmentType.Weapons,
  icon: 'all',
};

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  public getEquipmentCategories(): Array<EquipmentCategory> {
    return [
      {
        name: EquipmentType.Weapons,
        icon: '/assets/icons/weapons/great-sword/great-sword-48.svg',
      },
      {
        name: EquipmentType.Armors,
        icon: '/assets/icons/armors/chests/chests-48.svg',
      },
      {
        name: EquipmentType.Charms,
        icon: '/assets/icons/armors/charms/charms-48.svg',
      },
    ];
  }

  public getItemCategories(
    category: EquipmentCategory
  ): Array<EquipmentCategory> {
    if (category.name.toString().equals(EquipmentType.Weapons)) {
      return this.getWeaponCategories();
    }

    if (category.name.toString().equals(EquipmentType.Charms)) {
      return this.getCharmsCategories();
    }

    return this.getArmorCategories();
  }

  public getArmorCategories(): Array<ArmorCategory> {
    return [
      { name: ArmorType.Helms, icon: 'test' },
      { name: ArmorType.Chests, icon: 'test' },
      { name: ArmorType.Arms, icon: 'test' },
      { name: ArmorType.Waist, icon: 'test' },
      { name: ArmorType.Legs, icon: 'test' },
    ];
  }
  public getWeaponCategories(): Array<WeaponCategory> {
    return [
      { name: WeaponType.GreatSword, icon: 'test' },
      { name: WeaponType.SwordAndShield, icon: 'test' },
      { name: WeaponType.DualBlades, icon: 'test' },
      { name: WeaponType.LongSword, icon: 'test' },
      { name: WeaponType.Hammer, icon: 'test' },
      { name: WeaponType.HuntingHorn, icon: 'test' },
      { name: WeaponType.Lance, icon: 'test' },
      { name: WeaponType.Gunlance, icon: 'test' },
      { name: WeaponType.SwitchAxe, icon: 'test' },
      { name: WeaponType.ChargeBlade, icon: 'test' },
      { name: WeaponType.InsectGlaive, icon: 'test' },
      { name: WeaponType.Bow, icon: 'test' },
      { name: WeaponType.LightBowgun, icon: 'test' },
      { name: WeaponType.HeavyBowgun, icon: 'test' },
    ];
  }
  public getCharmsCategories(): Array<ItemCategory> {
    return [
      {
        name: ItemType.Attack,
        icon: 'test',
      },
      {
        name: ItemType.Defense,
        icon: 'test',
      },
      {
        name: ItemType.Utility,
        icon: 'test',
      },
      {
        name: ItemType.Other,
        icon: 'test',
      },
    ];
  }
}
