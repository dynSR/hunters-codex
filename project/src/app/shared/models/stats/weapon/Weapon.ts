import { ItemMetadata } from '../../../interfaces/items/Identifiable';
import { Item } from '../../../interfaces/items/Item';
import { ItemCategory } from '../../../interfaces/items/ItemCategory';
import '../../../extensions/string.extension';
import { DEFENSE_METADATA } from '../Defense';
import { ELEMENTAL_DAMAGE_METADATA } from './ElementalDamage';
import { RAW_DAMAGE_METADATA } from './RawDamage';
import { WeaponStats } from './WeaponStats';
import { AFFINITY_METADATA } from './Affinity';
import { ELDERSEAL_METADATA } from './Elderseal';
import { Decoration } from '../../Decoration';

/** @equals /assets/icons/weapons/ */
export const WEAPONS_ICON_FOLDER_PATH: string = '/assets/icons/weapons/';

export enum WeaponType {
  GreatSword = 'great-sword',
  SwordAndShield = 'sword-and-shield',
  DualBlades = 'dual-blades',
  LongSword = 'long-sword',
  Hammer = 'hammer',
  HuntingHorn = 'hunting-horn',
  Lance = 'lance',
  Gunlance = 'gunlance',
  SwitchAxe = 'switch-axe',
  ChargeBlade = 'charge-blade',
  InsectGlaive = 'insect-glaive',
  Bow = 'bow',
  LightBowgun = 'light-bowgun',
  HeavyBowgun = 'heavy-bowgun',
}

export interface WeaponCategory extends ItemCategory {}

export interface Weapon extends Item {
  category: WeaponCategory;
  stats: WeaponStats;
  decorations: Array<Decoration>;
}

/**
 * Dictionary containing weapons metadata.
 *
 * This mapping is used to associate each weapon type to its essential information
 * It avoids information redundancy throughout the project and thus make their management easier.
 * @see Identifiable for more information.
 */
export const WEAPON_METADATA: { [key: string]: ItemMetadata } = Object.values(
  WeaponType
).reduce((acc, weaponType) => {
  acc[weaponType] = {
    abbreviation:
      weaponType.split('-').length >= 2
        ? (weaponType.split('-').reduce((acc, curr) => {
            let result = `${acc.charAt(0)}${curr.charAt(0)}`;
            if (result.equals('ss')) {
              return result.toAndAssociation();
            }
            return result.toLocaleUpperCase();
          }, '') as Uppercase<string>)
        : (weaponType.toLocaleUpperCase() as Uppercase<string>),
    slug: weaponType as Lowercase<string>,
    icon: `${WEAPONS_ICON_FOLDER_PATH}${weaponType}/${weaponType}-24.svg` as Lowercase<string>,
  };
  return acc;
}, {} as { [key: string]: ItemMetadata });

export class WeaponBuilder {
  private readonly weapon: Required<Weapon> = {
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
      rawDamage: {
        value: 0,
        name: '',
        metadata: RAW_DAMAGE_METADATA,
      },
      sharpness: {
        redSharpnessLevel: null,
        orangeSharpnessLevel: null,
        yellowSharpnessLevel: null,
        greenSharpnessLevel: null,
        blueSharpnessLevel: null,
        whiteSharpnessLevel: null,
        purpleSharpnessLevel: null,
      },
      elementalDamage: {
        isHidden: false,
        value: 0,
        name: '',
        metadata: ELEMENTAL_DAMAGE_METADATA,
      },
      affinity: {
        value: 0,
        name: '',
        metadata: AFFINITY_METADATA,
      },
      elderseal: {
        value: 0,
        name: '',
        metadata: ELDERSEAL_METADATA,
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

  withId(id: number): WeaponBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.weapon.id = id;
    return this;
  }

  withName(name: Capitalize<string>): WeaponBuilder {
    if (name.isEmpty()) {
      console.error(`The weapon name cannot be empty or null.`);
    }

    this.weapon.name = name;
    return this;
  }

  withType(type: Lowercase<string> | number): WeaponBuilder {
    if (Number(type) < 0 || type.toLocaleString().isEmpty()) {
      console.error(
        `The weapon type provided must be greater than 0, not empty or not null.`
      );
    }

    this.weapon.type = type;
    return this;
  }

  withCategory(category: WeaponCategory): WeaponBuilder {
    if (category === null || category === undefined) {
      console.error(
        `The provided category must not be null or undefined.`,
        category
      );
    }

    this.weapon.category = category;
    return this;
  }

  withStats(stats: WeaponStats): WeaponBuilder {
    this.weapon.stats = stats;
    return this;
  }

  withDecorations(decorations: Array<Decoration>): WeaponBuilder {
    this.weapon.decorations = decorations;
    return this;
  }

  withImage(image: Lowercase<string>): WeaponBuilder {
    if (image.isEmpty()) {
      console.error(`The weapon image reference cannot be empty or null.`);
    }

    this.weapon.image = image;
    return this;
  }

  withMetadata(metadata: ItemMetadata): WeaponBuilder {
    this.weapon.metadata = metadata;
    return this;
  }

  build(): Weapon {
    // Add constraints here before returning the built weapon.
    return this.weapon;
  }
}
