import { Identifiable, ItemMetadata } from './Identifiable';

export interface Item extends Identifiable {
  type: Lowercase<string> | number;
  image: Lowercase<string>;
}

export class ItemBuilder {
  private readonly item: Required<Item> = {
    id: 0,
    name: '',
    type: '',
    image: '',
    metadata: {
      abbreviation: '',
      slug: '',
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

  withName(name: Capitalize<string>): ItemBuilder {
    this.item.name = name;
    return this;
  }

  withType(type: Lowercase<string> | number): ItemBuilder {
    this.item.type = type;
    return this;
  }

  withImage(image: Lowercase<string>): ItemBuilder {
    this.item.image = image;
    return this;
  }

  withMetadata(metadata: ItemMetadata): ItemBuilder {
    this.item.metadata = metadata;
    return this;
  }

  build(): Item {
    // Add constraints here before returning the built item.
    return this.item;
  }
}
