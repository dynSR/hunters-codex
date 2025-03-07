import { SharpnessLevel } from './SharpnessLevel';

/**
 * The second level of Sharpness that is not much better than red.
 * Many attacks will be deflected.
 */
export class OrangeSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: string = 'D9662C';
  rawDamageMultiplier: number = 0.75;
  elementalDamageMultiplier: number = 0.5;

  constructor(value: number) {
    this.value = value;
  }
}
