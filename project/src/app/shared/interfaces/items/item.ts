import { Precondition } from '../../utils/precondition';
import { Identifiable, ItemMetadata } from './Identifiable';

export interface Item extends Identifiable {
  type: string | number;
  image: string;
}

export class ItemBuilder {
  private readonly item: Required<Item> = {
    id: 0,
    name: '',
    slug: '',
    type: '',
    description: '',
    image: '',
    metadata: {
      abbreviation: '',
      icon: '',
    },
  };

  withId(id: number): ItemBuilder {
    if (id <= 0) {
      console.error(
        `The provided id (${id}) value must be greater or equal to 1`,
        id
      );
    }

    this.item.id = id;
    return this;
  }

  withName(name: string): ItemBuilder {
    if (name.isEmpty()) {
      console.error(`The item name cannot be empty or null.`);
    }

    this.item.name = name;
    return this;
  }

  withSlug(slug: string): ItemBuilder {
    if (slug.isEmpty()) {
      console.error(`The item slug cannot be empty or null.`);
    }

    this.item.slug = slug;
    return this;
  }

  withType(type: string | number): ItemBuilder {
    if (Number(type) < 0 || type.toLocaleString().isEmpty()) {
      console.error(
        `The item type provided must be greater than 0, not empty or not null.`
      );
    }

    this.item.type = type;
    return this;
  }

  withDescription(description: string): ItemBuilder {
    this.item.description = description;
    return this;
  }

  withImage(image: string): ItemBuilder {
    if (image.isEmpty()) {
      console.error(`The item image reference cannot be empty or null.`);
    }

    this.item.image = image;
    return this;
  }

  withMetadata(metadata: ItemMetadata): ItemBuilder {
    Precondition.notNull(metadata);

    this.item.metadata = metadata;
    return this;
  }

  build(): Item {
    // Add constraints here before returning the built item.
    return this.item;
  }
}
