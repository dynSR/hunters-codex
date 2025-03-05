import { Weapon } from '../../models/stats/weapon/Weapon';
import { CardItem } from './CardItem';

export interface WeaponCard extends CardItem {
  weapon: Readonly<Weapon>;
}
