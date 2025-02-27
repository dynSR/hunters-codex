import { ItemCategory } from './item-category';

export interface Item {
  name: string;
  category: ItemCategory;
  //   rarity: number;
  //   defense: number;
  icon: string;
}
