import { ItemMetadata } from '../interfaces/items/Identifiable';
import { Item } from '../interfaces/items/Item';
import { ItemCategory } from '../interfaces/items/ItemCategory';
import '../extensions/string.extension';
import { ArmorStats } from './stats/armor/ArmorStats';
import { DEFENSE_METADATA } from './stats/Defense';
import { THUNDER_RES_METADATA } from './stats/armor/ThunderResistance';
import { ICE_RES_METADATA } from './stats/armor/IceResistance';
import { WATER_RES_METADATA } from './stats/armor/WaterResistance';
import { FIRE_RES_METADATA } from './stats/armor/FireResistance';
import { DRAGON_RES_METADATA } from './stats/armor/DragonResistance';
import { Decoration } from './Decoration';

/** @equals /assets/icons/armors/ */
export const ARMORS_ICON_FOLDER_PATH: string = '/assets/icons/armors/';

export enum ArmorType {
  Helms = 'helms',
  Chests = 'chests',
  Arms = 'arms',
  Waists = 'waists',
  Legs = 'legs',
  Charms = 'charms',
}
export interface ArmorCategory extends ItemCategory {}
export interface Armor extends Item {
  category: ArmorCategory;
  stats: ArmorStats;
  decorations: Array<Decoration>;
}

/**
 * Dictionary containing armors metadata.
 *
 * This mapping is used to associate each armor type to its essential information
 * It avoids information redundancy throughout the project and thus make their management easier.
 * @see Identifiable for more information.
 */
export const ARMOR_METADATA: { [key: string]: ItemMetadata } = Object.values(
  ArmorType
).reduce((acc, armorType) => {
  acc[armorType] = {
    slug: armorType as Lowercase<string>,
    icon: `${ARMORS_ICON_FOLDER_PATH}${armorType}/${armorType}-24.svg` as Lowercase<string>,
  };
  return acc;
}, {} as { [key: string]: ItemMetadata });

export class ArmorBuilder {
  private readonly armor: Required<Armor> = {
    id: 0,
    name: '',
    type: '',
    category: {
      name: '',
      metadata: {
        slug: '',
        icon: '',
      },
    },
    stats: {
      defense: {
        value: 0,
        name: '',
        metadata: DEFENSE_METADATA,
      },
      fireResistance: {
        value: 0,
        name: '',
        metadata: FIRE_RES_METADATA,
      },
      waterResistance: {
        value: 0,
        name: '',
        metadata: WATER_RES_METADATA,
      },
      thunderResistance: {
        value: 0,
        name: '',
        metadata: THUNDER_RES_METADATA,
      },
      iceResistance: {
        value: 0,
        name: '',
        metadata: ICE_RES_METADATA,
      },
      dragonResistance: {
        value: 0,
        name: '',
        metadata: DRAGON_RES_METADATA,
      },
    },
    decorations: [],
    image: '',
    metadata: {
      abbreviation: '',
      slug: '',
      icon: '',
    },
  };

  constructor() {}

  withId(id: number): ArmorBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.armor.id = id;
    return this;
  }

  withName(name: Capitalize<string>): ArmorBuilder {
    if (name.isEmpty()) {
      console.error(`The armor name cannot be empty or null.`);
    }

    this.armor.name = name;
    return this;
  }

  withType(type: Lowercase<string> | number): ArmorBuilder {
    if (Number(type) < 0 || type.toLocaleString().isEmpty()) {
      console.error(
        `The armor type provided must be greater than 0, not empty or not null.`
      );
    }

    this.armor.type = type;
    return this;
  }

  withCategory(category: ArmorCategory): ArmorBuilder {
    if (category === null || category === undefined) {
      console.error(
        `The provided category must not be null or undefined.`,
        category
      );
    }

    this.armor.category = category;
    return this;
  }

  withStats(stats: ArmorStats): ArmorBuilder {
    this.armor.stats = stats;
    return this;
  }

  withDecorations(decorations: Array<Decoration>): ArmorBuilder {
    this.armor.decorations = decorations;
    return this;
  }

  withImage(image: Lowercase<string>): ArmorBuilder {
    if (image.isEmpty()) {
      console.error(`The armor image reference cannot be empty or null.`);
    }

    this.armor.image = image;
    return this;
  }

  withMetadata(metadata: ItemMetadata): ArmorBuilder {
    this.armor.metadata = metadata;
    return this;
  }

  build(): Armor {
    // Add constraints here before returning the built armor.
    return this.armor;
  }
}
