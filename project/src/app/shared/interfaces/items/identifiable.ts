/**
 * Represents the essential basic properties of a category or an item.
 */
export interface ItemMetadata {
  abbreviation?: string;
  icon: string;
}

/**
 * Holds all essential information about an item.
 * It can also be a category for a specific item as categories and items both use
 * properties such as abbreviation, slug and icon.
 */
export interface Identifiable {
  id?: number;
  name: string;
  slug: string;
  description?: string;
  metadata: Readonly<ItemMetadata>;
}
