import { SharpnessLevel } from './SharpnessLevel';

/**
 * The seventh level of Sharpness. Master Rank weapons only.
 * All attacks will be successful unless striking some monsters hard parts.
 */
export class PurpleSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: string = 'CC99FF';
  rawDamageMultiplier: number = 1.39;
  elementalDamageMultiplier: number = 1.25;

  constructor(value: number) {
    this.value = value;
  }
}
