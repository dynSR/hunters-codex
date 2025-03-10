import { BaseItemCategory } from '../interfaces/BaseItemCategory';
import { WeaponType } from './Weapon';

export interface WeaponCategory extends BaseItemCategory {
  type: WeaponType;
}

export class WeaponCategoryBuilder {
  private readonly weaponCategory: Required<WeaponCategory> = {
    id: 0,
    name: '',
    slug: '',
    type: WeaponType.None,
    description: '',
    icon: '',
  };

  constructor(type: WeaponType) {
    this.weaponCategory.type = type;
  }

  withId(id: number): WeaponCategoryBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.weaponCategory.id = id;
    return this;
  }

  withName(name: string): WeaponCategoryBuilder {
    if (name.isEmpty()) {
      console.error(`The name cannot be empty or null.`);
    }

    this.weaponCategory.name = name;
    return this;
  }

  withSlug(slug: string): WeaponCategoryBuilder {
    if (slug.isEmpty()) {
      console.error(`The slug cannot be empty or null.`);
    }

    this.weaponCategory.slug = slug;
    return this;
  }

  withDescription(description: string): WeaponCategoryBuilder {
    this.weaponCategory.description = description;
    return this;
  }

  withIcon(icon: string): WeaponCategoryBuilder {
    if (icon.isEmpty()) {
      console.error(`The icon cannot be empty or null.`);
    }

    this.weaponCategory.icon = icon;
    return this;
  }

  build(): WeaponCategory {
    // Add constraints here before returning the built item category.
    this.weaponCategory.icon = `/assets/icons/weapons/${this.weaponCategory.type}/${this.weaponCategory.type}-24.svg`;

    return this.weaponCategory;
  }
}
