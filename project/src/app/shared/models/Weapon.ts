import { BaseItem, BaseItemType } from '../interfaces/BaseItem';
import { WeaponStats } from './stats/weapon/WeaponStats';
import { Decoration } from './Decoration';
import { Precondition } from '../utils/precondition';
import '../extensions/string.extension';
import { StatBuilder, StatType } from './stats/Stat';
import { WeaponCategory } from './WeaponCategory';

/** @equals /assets/icons/weapons/ */
export const WEAPONS_ICON_FOLDER_PATH: string = '/assets/icons/weapons/';

export enum WeaponType {
  None = 'none',
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

export interface Weapon extends Omit<BaseItem, 'icon'> {
  type: WeaponType;
  category: WeaponCategory;
  stats: WeaponStats;
  decorations: Array<Decoration>;
}

export class WeaponBuilder {
  private readonly weapon: Required<Weapon> = {
    id: 0,
    name: '',
    slug: '',
    baseType: BaseItemType.Weapons,
    type: WeaponType.None,
    description: '',
    category: {
      id: 0,
      name: '',
      slug: '',
      type: WeaponType.None,
      description: '',
      icon: '',
    },
    stats: {
      defense: new StatBuilder().withType(StatType.Defense).build(),
      rawDamage: new StatBuilder().withType(StatType.RawDamage).build(),
      elementalDamage: {
        isHidden: false,
        ...new StatBuilder().withType(StatType.ElementalDamage).build(),
      },
      affinity: new StatBuilder().withType(StatType.Affinity).build(),
      elderseal: new StatBuilder().withType(StatType.Elderseal).build(),
      sharpness: {
        ...new StatBuilder().withType(StatType.Sharpness).build(),
        red: null,
        orange: null,
        yellow: null,
        green: null,
        blue: null,
        white: null,
        purple: null,
      },
    },
    decorations: [],
    image: '',
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

  withType(type: WeaponType): WeaponBuilder {
    if (type === null || Number(type) < 0 || type.isEmpty()) {
      console.error('The type cannot be null, lesser than 0 nor empty.');
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

  build(): Weapon {
    // Add constraints here before returning the built weapon.
    return this.weapon;
  }
}
