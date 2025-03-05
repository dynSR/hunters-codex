import { SharpnessLevel } from './SharpnessLevel';

/**
 * The sixth level of Sharpness.
 * All attacks will be successful unless striking some monsters hard parts (particularly on Master Rank monsters).
 */
export class WhiteSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: Uppercase<string> = 'FFFFFF';
  rawDamageMultiplier: number = 1.32;
  elementalDamageMultiplier: number = 1.15;

  constructor(value: number) {
    this.value = value;
  }
}
