import { BaseItem, BaseItemType } from '../interfaces/BaseItem';
import { BaseItemCategory } from '../interfaces/BaseItemCategory';
import { ArmorStats } from './stats/armor/ArmorStats';
import { Decoration } from './Decoration';
import { Precondition } from '../utils/precondition';
import { StatBuilder, StatType } from './stats/Stat';

/** @equals /assets/icons/armors/ */
export const ARMORS_ICON_FOLDER_PATH: string = '/assets/icons/armors/';

export enum ArmorType {
  None = 'none',
  Helms = 'helms',
  Chests = 'chests',
  Arms = 'arms',
  Waists = 'waists',
  Legs = 'legs',
  Charms = 'charms',
}
export interface ArmorCategory extends BaseItemCategory {}
export interface Armor extends Omit<BaseItem, 'icon'> {
  type: ArmorType;
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
// export const ARMOR_METADATA: { [key: string]: ItemMetadata } =
//   Object.fromEntries(
//     Object.values(ArmorType).map((armorType) => [
//       armorType,
//       {
//         icon: `${ARMORS_ICON_FOLDER_PATH}${armorType}/${armorType}-24.svg`,
//       },
//     ])
//   );

export class ArmorBuilder {
  private readonly armor: Required<Armor> = {
    id: 0,
    name: '',
    slug: '',
    baseType: BaseItemType.Armors,
    type: ArmorType.None,
    description: '',
    category: {
      name: '',
      slug: '',
      icon: '',
    },
    stats: {
      defense: new StatBuilder().withType(StatType.Defense).build(),
      fireResistance: new StatBuilder()
        .withType(StatType.FireResistance)
        .build(),
      waterResistance: new StatBuilder()
        .withType(StatType.WaterResistance)
        .build(),
      thunderResistance: new StatBuilder()
        .withType(StatType.ThunderResistance)
        .build(),
      iceResistance: new StatBuilder().withType(StatType.IceResistance).build(),
      dragonResistance: new StatBuilder()
        .withType(StatType.DragonResistance)
        .build(),
    },
    decorations: [],
    image: '',
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

  withName(name: string): ArmorBuilder {
    if (name.isEmpty()) {
      console.error(`The name cannot be empty or null.`);
    }

    this.armor.name = name;
    return this;
  }

  withSlug(slug: string): ArmorBuilder {
    if (slug.isEmpty()) {
      console.error(`The slug cannot be empty or null.`);
    }

    this.armor.slug = slug;
    return this;
  }

  withType(type: ArmorType): ArmorBuilder {
    if (type === null || Number(type) < 0 || type.isEmpty()) {
      console.error('The type cannot be null, lesser than 0 nor empty.');
    }

    this.armor.type = type;
    return this;
  }

  withDescription(description: string): ArmorBuilder {
    this.armor.description = description;
    return this;
  }

  withCategory(category: ArmorCategory): ArmorBuilder {
    Precondition.notNull(category);
    this.armor.category = category;
    return this;
  }

  withStats(stats: ArmorStats): ArmorBuilder {
    Precondition.notNull(stats);
    this.armor.stats = stats;
    return this;
  }

  withDecorations(decorations: Array<Decoration>): ArmorBuilder {
    Precondition.notNull(decorations);
    this.armor.decorations = decorations;
    return this;
  }

  withImage(image: string): ArmorBuilder {
    if (image.isEmpty()) {
      console.error(`The image reference cannot be empty or null.`);
    }

    this.armor.image = image;
    return this;
  }

  build(): Armor {
    // Add constraints here before returning the built armor.
    return this.armor;
  }
}
