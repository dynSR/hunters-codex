import { Identifiable } from './Identifiable';

export enum BaseItemType {
  None = 'none',
  Weapons = 'weapons',
  Armors = 'armors',
  Items = 'items',
}

export interface BaseItem extends Identifiable {
  baseType: BaseItemType;
  image: string;
}
