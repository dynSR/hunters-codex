export enum SharpnessLevelColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  White = 'white',
  Purple = 'purple',
}

export interface SharpnessLevel {
  value: number;
  color: Uppercase<string>;
  rawDamageMultiplier: number;
  elementalDamageMultiplier: number;
}
