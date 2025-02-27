import { Injectable } from '@angular/core';
import { ItemCategory } from '../interfaces/items/item-category';
import { WeaponCategory, WeaponType } from '../models/weapon';
import { ArmorCategory, ArmorType } from '../models/armor';

export enum EquipmentType {
  Weapon = 'Weapon',
  Armor = 'Armor',
  Charm = 'Charm',
}
export interface EquipmentCategory extends ItemCategory {}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

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
      { name: WeaponType.InsectGlaive, icon: 'test' },
      { name: WeaponType.InsectGlaive, icon: 'test' },
      { name: WeaponType.InsectGlaive, icon: 'test' },
    ];
  }
}
