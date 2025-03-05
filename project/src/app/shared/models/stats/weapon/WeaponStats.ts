import { Defense } from '../Defense';
import { Affinity } from './Affinity';
import { Elderseal } from './Elderseal';
import { ElementalDamage } from './ElementalDamage';
import { RawDamage } from './RawDamage';
import { Sharpness } from './Sharpness';

export interface WeaponStats {
  defense: Defense;
  rawDamage: RawDamage;
  sharpness: Sharpness;
  elementalDamage: ElementalDamage;
  affinity: Affinity;
  elderseal: Elderseal;
}
