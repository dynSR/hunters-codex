import { SharpnessLevel } from './SharpnessLevel';

/**
 * The fifth level of Sharpness.
 * Attacks will be even more successful unless striking monsters hard parts.
 */
export class BlueSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: Uppercase<string> = '2C86D9';
  rawDamageMultiplier: number = 1.2;
  elementalDamageMultiplier: number = 1.0625;

  constructor(value: number) {
    this.value = value;
  }
}
