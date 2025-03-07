import { Identifiable, ItemMetadata } from './Identifiable';

export interface ItemCategory extends Identifiable {}

export class ItemCategoryBuilder {
  private readonly itemCategory: Required<ItemCategory> = {
    id: 0,
    name: '',
    slug: '',
    description: '',
    metadata: {
      abbreviation: '',
      icon: '',
    },
  };

  constructor() {}

  withId(id: number): ItemCategoryBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.itemCategory.id = id;
    return this;
  }

  withName(name: string): ItemCategoryBuilder {
    if (name.isEmpty()) {
      console.error(`The item category name cannot be empty or null.`);
    }

    this.itemCategory.name = name;
    return this;
  }

  withSlug(slug: string): ItemCategoryBuilder {
    if (slug.isEmpty()) {
      console.error(`The item category slug cannot be empty or null.`);
    }

    this.itemCategory.slug = slug;
    return this;
  }

  withDescription(description: string): ItemCategoryBuilder {
    this.itemCategory.description = description;
    return this;
  }

  withMetadata(metadata: ItemMetadata): ItemCategoryBuilder {
    this.itemCategory.metadata = metadata;
    return this;
  }

  build(): ItemCategory {
    // Add constraints here before returning the built item category.
    return this.itemCategory;
  }
}
