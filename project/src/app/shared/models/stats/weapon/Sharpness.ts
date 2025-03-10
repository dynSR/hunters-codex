import { BlueSharpnessLevel } from '../sharpness-levels/BlueSharpnessLevel';
import { GreenSharpnessLevel } from '../sharpness-levels/GreenSharpnessLevel';
import { OrangeSharpnessLevel } from '../sharpness-levels/OrangeSharpnessLevel';
import { PurpleSharpnessLevel } from '../sharpness-levels/PurpleSharpnessLevel';
import { RedSharpnessLevel } from '../sharpness-levels/RedSharpnessLevel';
import { SharpnessLevelColor } from '../sharpness-levels/SharpnessLevel';
import { WhiteSharpnessLevel } from '../sharpness-levels/WhiteSharpnessLevel';
import { YellowSharpnessLevel } from '../sharpness-levels/YellowSharpnessLevel';
import { Stat, StatType } from '../Stat';

type SharpnessLevelClass =
  | typeof RedSharpnessLevel
  | typeof OrangeSharpnessLevel
  | typeof YellowSharpnessLevel
  | typeof GreenSharpnessLevel
  | typeof BlueSharpnessLevel
  | typeof WhiteSharpnessLevel
  | typeof PurpleSharpnessLevel;

/**
 * Sharpness is a factor in determining the cutting power of a Weapon and its damage output.
 *
 * The Sharpness level of a weapon will degrade over the course of a fight. When wielding a Blademaster Weapon, it is important to keep it at its maximum Sharpness with Whetstones. This will make cutting Monster parts easier (blade weapons only) and lower the chance of an attack being deflected.
 *
 * There are 7 levels of Sharpness. Damaging Monster parts sometimes requires a weapon to currently be at a certain level.
 */
export interface Sharpness extends Stat {
  red: RedSharpnessLevel | null;
  orange: OrangeSharpnessLevel | null;
  yellow: YellowSharpnessLevel | null;
  green: GreenSharpnessLevel | null;
  blue: BlueSharpnessLevel | null;
  white: WhiteSharpnessLevel | null;
  purple: PurpleSharpnessLevel | null;
}

export class SharpnessBuilder {
  private readonly sharpness: Required<
    Omit<Sharpness, 'id' | 'value' | 'min' | 'max'>
  > = {
    name: '',
    slug: '',
    type: StatType.Sharpness,
    description: '',
    icon: '',
    red: null,
    orange: null,
    yellow: null,
    green: null,
    blue: null,
    white: null,
    purple: null,
  };

  private static levelClasses: Record<string, SharpnessLevelClass> = {
    [SharpnessLevelColor.Red]: RedSharpnessLevel,
    [SharpnessLevelColor.Orange]: OrangeSharpnessLevel,
    [SharpnessLevelColor.Yellow]: YellowSharpnessLevel,
    [SharpnessLevelColor.Green]: GreenSharpnessLevel,
    [SharpnessLevelColor.Blue]: BlueSharpnessLevel,
    [SharpnessLevelColor.White]: WhiteSharpnessLevel,
    [SharpnessLevelColor.Purple]: PurpleSharpnessLevel,
  };

  constructor() {}

  withSharpness(level: SharpnessLevelColor, value: number): SharpnessBuilder {
    if (!(level in SharpnessBuilder.levelClasses)) {
      throw new Error(`Invalid sharpness level: ${level}`);
    }

    this.sharpness[level] = new SharpnessBuilder.levelClasses[level](value);
    return this;
  }

  build(): Sharpness {
    // Validation: Each sharpness level must greater than 0, if it is instantiated
    // Object.entries(this.sharpness).forEach(([level, instance]) => {
    //   if (instance && instance.value < 0) {
    //     throw new Error(`Invalid sharpness value for ${level}: must be >= 0`);
    //   }
    // });

    return this.sharpness;
  }
}
