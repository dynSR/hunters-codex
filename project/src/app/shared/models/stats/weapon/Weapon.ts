import { ItemMetadata } from '../../../interfaces/items/Identifiable';
import { Item } from '../../../interfaces/items/Item';
import { ItemCategory } from '../../../interfaces/items/ItemCategory';
import { DEFENSE_METADATA } from '../Defense';
import { ELEMENTAL_DAMAGE_METADATA } from './ElementalDamage';
import { RAW_DAMAGE_METADATA } from './RawDamage';
import { WeaponStats } from './WeaponStats';
import { AFFINITY_METADATA } from './Affinity';
import { ELDERSEAL_METADATA } from './Elderseal';
import { Decoration } from '../../Decoration';
import { Precondition } from '../../../utils/precondition';
import { CaseFlags } from '../../../enums/case-flags';

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
export const WEAPON_METADATA: { [key: string]: ItemMetadata } =
  Object.fromEntries(
    Object.values(WeaponType).map((weaponType) => [
      weaponType,
      {
        abbreviation:
          /**
           * Here we transform each weapon type that are in lower kebab case to title case.
           * Except for sword and shield that need to match 'SnS' format.
           */
          weaponType.split('-').length >= 2
            ? weaponType.split('-').reduce((acc, curr) => {
                let result = `${acc.charAt(0)}${curr.charAt(0)}`;
                if (result.equals('ss')) {
                  return result.toAndAssociation();
                }
                return result.toLocaleUpperCase();
              }, '')
            : weaponType.toCase(CaseFlags.Uppercase),
        icon: `${WEAPONS_ICON_FOLDER_PATH}${weaponType}/${weaponType}-24.svg`,
      },
    ])
  );

export class WeaponBuilder {
  private readonly weapon: Required<Weapon> = {
    id: 0,
    name: '',
    slug: '',
    type: '',
    description: '',
    category: {
      name: '',
      slug: '',
      metadata: {
        icon: '',
      },
    },
    stats: {
      defense: {
        value: 0,
        name: '',
        slug: '',
        metadata: DEFENSE_METADATA,
      },
      rawDamage: {
        value: 0,
        name: '',
        slug: '',
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
        slug: '',
        metadata: ELEMENTAL_DAMAGE_METADATA,
      },
      affinity: {
        value: 0,
        name: '',
        slug: '',
        metadata: AFFINITY_METADATA,
      },
      elderseal: {
        value: 0,
        name: '',
        slug: '',
        metadata: ELDERSEAL_METADATA,
      },
    },
    decorations: [],
    image: '',
    metadata: {
      abbreviation: '',
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

  withName(name: string): WeaponBuilder {
    if (name.isEmpty()) {
      console.error(`The weapon name cannot be empty or null.`);
    }

    this.weapon.name = name;
    return this;
  }

  withSlug(slug: string): WeaponBuilder {
    if (slug.isEmpty()) {
      console.error(`The weapon slug cannot be empty or null.`);
    }

    this.weapon.slug = slug;
    return this;
  }

  withType(type: string | number): WeaponBuilder {
    if (Number(type) < 0 || type.toLocaleString().isEmpty()) {
      console.error(
        `The weapon type provided must be greater than 0, not empty or not null.`
      );
    }

    this.weapon.type = type;
    return this;
  }

  withDescription(description: string): WeaponBuilder {
    this.weapon.description = description;
    return this;
  }

  withCategory(category: WeaponCategory): WeaponBuilder {
    Precondition.notNull(category);
    this.weapon.category = category;
    return this;
  }

  withStats(stats: WeaponStats): WeaponBuilder {
    Precondition.notNull(stats);
    this.weapon.stats = stats;
    return this;
  }

  withDecorations(decorations: Array<Decoration>): WeaponBuilder {
    Precondition.notNull(decorations);
    this.weapon.decorations = decorations;
    return this;
  }

  withImage(image: string): WeaponBuilder {
    if (image.isEmpty()) {
      console.error(`The weapon image reference cannot be empty or null.`);
    }

    this.weapon.image = image;
    return this;
  }

  withMetadata(metadata: ItemMetadata): WeaponBuilder {
    Precondition.notNull(metadata);
    this.weapon.metadata = metadata;
    return this;
  }

  build(): Weapon {
    // Add constraints here before returning the built weapon.
    return this.weapon;
  }
}
