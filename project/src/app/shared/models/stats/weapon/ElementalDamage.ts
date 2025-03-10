import { Stat } from '../Stat';

/**
 * Elemental Damage or Elements refers to the secondary damage dealt by Weapons and Monsters and lowered by specific Resistances.
 */
export interface ElementalDamage extends Stat {
  // TODO: crate associated Element

  /**
   * An element or status in parenthesis is a Hidden Element/Status.
   * They require the skill Free Element/Ammo Up in order for the element/status to be active. If you do not have any ranks of the Free Ele skill, then the element/status in parenthesis is inactive and ignored.
   */
  isHidden: boolean;
}
