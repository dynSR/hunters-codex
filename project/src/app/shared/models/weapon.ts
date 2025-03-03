import { ItemMetadata } from '../interfaces/items/identifiable';
import { Item } from '../interfaces/items/item';
import { ItemCategory } from '../interfaces/items/item-category';

/** @equals /assets/icons/weapons/ */
export const WEAPONS_ICON_FOLDER_PATH: string = '/assets/icons/weapons/';

export enum WeaponType {
  GreatSword = 'Great Sword',
  SwordAndShield = 'Sword and Shield',
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

/**
 * Dictionary containing weapons metadata.
 *
 * This mapping is used to associate each weapon type to its essential information
 * It avoids information redundancy throughout the project and thus make their management easier.
 * @see Identifiable for more information.
 */
export const WEAPON_METADATA: {
  [key: string | number]: ItemMetadata;
} = {
  [WeaponType.GreatSword]: {
    abbreviation: 'GS',
    slug: WeaponType.GreatSword.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'great-sword/great-sword-24.svg',
  },
  [WeaponType.SwordAndShield]: {
    abbreviation: 'SnS',
    slug: WeaponType.SwordAndShield.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'sword-and-shield/sword-and-shield-24.svg',
  },
  [WeaponType.DualBlades]: {
    abbreviation: 'DB',
    slug: WeaponType.DualBlades.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'dual-blades/dual-blades-24.svg',
  },
  [WeaponType.LongSword]: {
    abbreviation: 'LS',
    slug: WeaponType.LongSword.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'long-sword/long-sword-24.svg',
  },
  [WeaponType.Hammer]: {
    slug: WeaponType.Hammer.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'hammer/hammer-24.svg',
  },
  [WeaponType.HuntingHorn]: {
    abbreviation: 'HH',
    slug: WeaponType.HuntingHorn.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'hunting-horn/hunting-horn-24.svg',
  },
  [WeaponType.Lance]: {
    slug: WeaponType.Lance.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'lance/lance-24.svg',
  },
  [WeaponType.Gunlance]: {
    abbreviation: 'GL',
    slug: WeaponType.Gunlance.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'gunlance/gunlance-24.svg',
  },
  [WeaponType.SwitchAxe]: {
    abbreviation: 'SA',
    slug: WeaponType.SwitchAxe.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'switch-axe/switch-axe-24.svg',
  },
  [WeaponType.ChargeBlade]: {
    abbreviation: 'CB',
    slug: WeaponType.ChargeBlade.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'charge-blade/charge-blade-24.svg',
  },
  [WeaponType.InsectGlaive]: {
    abbreviation: 'IG',
    slug: WeaponType.InsectGlaive.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'insect-glaive/insect-glaive-24.svg',
  },
  [WeaponType.Bow]: {
    slug: WeaponType.Bow.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'bow/bow-24.svg',
  },
  [WeaponType.LightBowgun]: {
    abbreviation: 'LBG',
    slug: WeaponType.LightBowgun.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'light-bowgun/light-bowgun-24.svg',
  },
  [WeaponType.HeavyBowgun]: {
    abbreviation: 'HBG',
    slug: WeaponType.HeavyBowgun.toKebabCase(true),
    icon: WEAPONS_ICON_FOLDER_PATH + 'heavy-bowgun/heavy-bowgun-24.svg',
  },
};
