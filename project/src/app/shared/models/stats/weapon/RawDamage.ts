import { ItemMetadata } from '../../../interfaces/items/Identifiable';
import { Stat } from '../Stat';

/**
 * Raw Damage is a damage statistic. Monsters also have raw damage, which is offset by the hunter's Defense stat.
 */
export interface RawDamage extends Stat {}

export const RAW_DAMAGE_METADATA: Required<ItemMetadata> = {
  abbreviation: '',
  slug: '',
  icon: '',
};
