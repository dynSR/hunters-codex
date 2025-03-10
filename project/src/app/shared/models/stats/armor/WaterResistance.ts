import { ElementalResistance } from './ElementalResistance';

/**
 * Water Resistance is a cumulative related to Elemental Resistances.
 * It affects player and monster statuses.
 * Weapons and Monsters with high water resistance will be less susceptible to Water Element attacks and damage, as well as Waterblight.
 */
export interface WaterResistance extends ElementalResistance {}
