import { Weapon } from '../../models/weapon';
import { CardItem } from './card-item';

export interface WeaponCard extends CardItem {
  weapon: Weapon;
}
