import { SharpnessLevel } from './SharpnessLevel';

/**
 * This is the first and lowest level of Sharpness possible.
 * Most if not all attacks made at this Sharpness will cause a blade (or blunt weapon) to bounce off the hides of monsters.
 */
export class RedSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: string = 'D92C2C';
  rawDamageMultiplier: number = 0.5;
  elementalDamageMultiplier: number = 0.25;

  constructor(value: number) {
    this.value = value;
  }
}
