import { ElementalResistance } from './ElementalResistance';

/**
 * Ice Resistance is a cumulative related to Elemental Resistances.
 * It affects player and monster statuses.
 * Weapons and Monsters with high ice resistance will be less susceptible to Ice Element attacks and damage, as well as Iceblight.
 */
export interface IceResistance extends ElementalResistance {}
