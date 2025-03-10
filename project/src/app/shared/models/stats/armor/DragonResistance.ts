import { ElementalResistance } from './ElementalResistance';

/**
 * Dragon Resistance is a cumulative related to Elemental Resistances.
 * It affects player and monster statuses.
 * Weapons and Monsters with high dragon resistance will be less susceptible to Dragon Element attacks and damage, as well as Dragonblight.
 */
export interface DragonResistance extends ElementalResistance {}
