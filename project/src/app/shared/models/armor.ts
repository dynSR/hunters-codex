import { ItemMetadata } from '../interfaces/items/identifiable';
import { Item } from '../interfaces/items/item';
import { ItemCategory } from '../interfaces/items/item-category';

/** @equals /assets/icons/armors/ */
export const ARMORS_ICON_FOLDER_PATH: string = '/assets/icons/armors/';

export enum ArmorType {
  Helms = 'Helms',
  Chests = 'Chests',
  Arms = 'Arms',
  Waists = 'Waists',
  Legs = 'Legs',
  Charms = 'Charms',
}
export interface ArmorCategory extends ItemCategory {}
export interface Armor extends Item {}

/**
 * Dictionary containing armors metadata.
 *
 * This mapping is used to associate each armor type to its essential information
 * It avoids information redundancy throughout the project and thus make their management easier.
 * @see Identifiable for more information.
 */
export const ARMOR_METADATA: {
  [key: string | number]: ItemMetadata;
} = {
  [ArmorType.Helms]: {
    slug: ArmorType.Helms.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'helms/helms-24.svg',
  },
  [ArmorType.Chests]: {
    slug: ArmorType.Chests.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'chests/chests-24.svg',
  },
  [ArmorType.Arms]: {
    slug: ArmorType.Arms.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'arms/arms-24.svg',
  },
  [ArmorType.Waists]: {
    slug: ArmorType.Waists.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'waists/waists-24.svg',
  },
  [ArmorType.Legs]: {
    slug: ArmorType.Legs.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'legs/legs-24.svg',
  },
  [ArmorType.Charms]: {
    slug: ArmorType.Charms.toLocaleLowerCase(),
    icon: ARMORS_ICON_FOLDER_PATH + 'charms/charms-24.svg',
  },
};
