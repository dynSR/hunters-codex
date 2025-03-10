import { ElementalResistance } from './ElementalResistance';

/**
 *Fire Resistance is a cumulative related to Elemental Resistances. 
 It affects player and monster statuses. 
 Weapons and Monsters with high fire resistance will be less susceptible to Fire Element attacks and damage, as well as Fireblight.
 */
export interface FireResistance extends ElementalResistance {}
