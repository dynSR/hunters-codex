import { ItemCategory } from './item-category';

export enum ItemType {
  Attack = 'Attack',
  Defense = 'Defense',
  Utility = 'Utility',
  Other = 'Other',
}

export interface Item {
  name: string;
  category: ItemCategory;
  //   rarity: number;
  //   defense: number;
  icon: string;
}
