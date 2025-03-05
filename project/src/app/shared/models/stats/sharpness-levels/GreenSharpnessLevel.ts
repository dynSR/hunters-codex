import { SharpnessLevel } from './SharpnessLevel';

/**
 * The fourth level of Sharpness.
 * This is where most attacks will be successful.
 */
export class GreenSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: Uppercase<string> = '70D92C';
  rawDamageMultiplier: number = 1.05;
  elementalDamageMultiplier: number = 1;

  constructor(value: number) {
    this.value = value;
  }
}
