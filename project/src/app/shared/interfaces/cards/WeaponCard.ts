import { Weapon } from '../../models/Weapon';
import { CardItem } from './CardItem';

export interface WeaponCard extends CardItem {
  weapon: Readonly<Weapon>;
}
