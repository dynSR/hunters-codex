/**
 * Represents the essential basic properties of a category or an item.
 */
export interface ItemMetadata {
  abbreviation?: Uppercase<string>;
  slug: Lowercase<string>;
  icon: Lowercase<string>;
}

/**
 * Holds all essential information about an item.
 * It can also be a category for a specific item as categories and items both use
 * properties such as abbreviation, slug and icon.
 */
export interface Identifiable {
  id?: number;
  name: Capitalize<string>;
  metadata: Readonly<ItemMetadata>;
}
