import { ItemMetadata } from '../../../interfaces/items/Identifiable';
import { Stat } from '../Stat';

/**
 * Elderseal is a Weapon Mechanic, it will prevent certain Elder Dragons from using their special aura abilities and enrage attacks as often.
 */
export interface Elderseal extends Stat {}

export const ELDERSEAL_METADATA: Required<ItemMetadata> = {
  abbreviation: '',
  icon: '',
};
