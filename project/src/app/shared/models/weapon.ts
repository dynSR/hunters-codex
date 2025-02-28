import { Item } from '../interfaces/items/item';
import { ItemCategory } from '../interfaces/items/item-category';

export enum WeaponType {
  GreatSword = 'Great Sword',
  SwordAndShield = 'Sword & Shield',
  DualBlades = 'Dual Blades',
  LongSword = 'Long Sword',
  Hammer = 'Hammer',
  HuntingHorn = 'Hunting Horn',
  Lance = 'Lance',
  Gunlance = 'Gunlance',
  SwitchAxe = 'Switch Axe',
  ChargeBlade = 'Charge Blade',
  InsectGlaive = 'Insect Glaive',
  Bow = 'Bow',
  LightBowgun = 'Light Bowgun',
  HeavyBowgun = 'Heavy Bowgun',
}
export interface WeaponCategory extends ItemCategory {}
export interface Weapon extends Item {}
