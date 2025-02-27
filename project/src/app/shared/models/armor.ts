import { Item } from '../interfaces/items/item';
import { ItemCategory } from '../interfaces/items/item-category';

export enum ArmorType {
  Helms = 'Helms',
  Chests = 'Chests',
  Arms = 'Arms',
  Waist = 'Waist',
  Legs = 'Legs',
}
export interface ArmorCategory extends ItemCategory {}

export interface Armor extends Item {}
