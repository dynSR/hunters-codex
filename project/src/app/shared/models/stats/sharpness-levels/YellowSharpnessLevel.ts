import { SharpnessLevel } from './SharpnessLevel';

/**
 * The third level of Sharpness. At this level some hits can be landed on a monster in the early stages of the game.
 */
export class YellowSharpnessLevel implements SharpnessLevel {
  value: number = 0;
  color: string = 'D9D12C';
  rawDamageMultiplier: number = 1;
  elementalDamageMultiplier: number = 0.75;

  constructor(value: number) {
    this.value = value;
  }
}
