import { ItemMetadata } from '../../interfaces/items/Identifiable';
import { Stat } from './Stat';

/**
 * Defense is a stat that equals the total protection the Player or Monster has against Raw (Physical) Damage.
 */
export interface Defense extends Stat {}

export const DEFENSE_METADATA: Required<ItemMetadata> = {
  abbreviation: '',
  slug: '',
  icon: '',
};
