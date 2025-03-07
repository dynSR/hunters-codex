import { ItemMetadata } from '../../../interfaces/items/Identifiable';
import { ElementalResistance } from './ElementalResistance';

/**
 * Ice Resistance is a cumulative related to Elemental Resistances.
 * It affects player and monster statuses.
 * Weapons and Monsters with high ice resistance will be less susceptible to Ice Element attacks and damage, as well as Iceblight.
 */
export interface IceResistance extends ElementalResistance {}

export const ICE_RES_METADATA: Required<ItemMetadata> = {
  abbreviation: '',
  icon: '',
};
