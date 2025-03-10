import { BaseItemCategory } from '../interfaces/BaseItemCategory';
import { ArmorType } from './Armor';

export interface ArmorCategory extends BaseItemCategory {
  type: ArmorType;
}

export class ArmorCategoryBuilder {
  private readonly armorCategory: Required<ArmorCategory> = {
    id: 0,
    name: '',
    slug: '',
    type: ArmorType.None,
    description: '',
    icon: '',
  };

  constructor(type: ArmorType) {
    this.armorCategory.type = type;
  }

  withId(id: number): ArmorCategoryBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.armorCategory.id = id;
    return this;
  }

  withName(name: string): ArmorCategoryBuilder {
    if (name.isEmpty()) {
      console.error(`The name cannot be empty or null.`);
    }

    this.armorCategory.name = name;
    return this;
  }

  withSlug(slug: string): ArmorCategoryBuilder {
    if (slug.isEmpty()) {
      console.error(`The slug cannot be empty or null.`);
    }

    this.armorCategory.slug = slug;
    return this;
  }

  withDescription(description: string): ArmorCategoryBuilder {
    this.armorCategory.description = description;
    return this;
  }

  withIcon(icon: string): ArmorCategoryBuilder {
    if (icon.isEmpty()) {
      console.error(`The icon cannot be empty or null.`);
    }

    this.armorCategory.icon = icon;
    return this;
  }

  build(): ArmorCategory {
    // Add constraints here before returning the built item category.
    this.armorCategory.icon = `/assets/icons/armors/${this.armorCategory.type}/${this.armorCategory.type}-24.svg`;

    return this.armorCategory;
  }
}
