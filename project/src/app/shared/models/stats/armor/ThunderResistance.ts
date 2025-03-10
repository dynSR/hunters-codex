import { ElementalResistance } from './ElementalResistance';

/**
 * Thunder Resistance is a cumulative related to Elemental Resistances.
 * It affects player and monster statuses.
 * Weapons and Monsters with high thunder resistance will be less susceptible to Thunder Element attacks and damage, as well as Thunderblight.
 */
export interface ThunderResistance extends ElementalResistance {}
