import { Identifiable } from './Identifiable';

export interface BaseItemCategory extends Identifiable {}

export class BaseItemCategoryBuilder {
  private readonly itemCategory: Required<BaseItemCategory> = {
    id: 0,
    name: '',
    slug: '',
    description: '',
    icon: '',
  };

  constructor() {}

  withId(id: number): BaseItemCategoryBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.itemCategory.id = id;
    return this;
  }

  withName(name: string): BaseItemCategoryBuilder {
    if (name.isEmpty()) {
      console.error(`The name cannot be empty or null.`);
    }

    this.itemCategory.name = name;
    return this;
  }

  withSlug(slug: string): BaseItemCategoryBuilder {
    if (slug.isEmpty()) {
      console.error(`The slug cannot be empty or null.`);
    }

    this.itemCategory.slug = slug;
    return this;
  }

  withDescription(description: string): BaseItemCategoryBuilder {
    this.itemCategory.description = description;
    return this;
  }

  withIcon(icon: string): BaseItemCategoryBuilder {
    if (icon.isEmpty()) {
      console.error(`The icon cannot be empty or null.`);
    }

    this.itemCategory.icon = icon;
    return this;
  }

  build(): BaseItemCategory {
    // Add constraints here before returning the built item category.
    return this.itemCategory;
  }
}
