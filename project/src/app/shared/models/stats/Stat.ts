import { CaseFlags } from '../../enums/case-flags';
import { Identifiable } from '../../interfaces/Identifiable';

export enum StatType {
  None = 'none',
  Defense = 'defense',
  RawDamage = 'raw-damage',
  Sharpness = 'sharpness',
  ElementalDamage = 'elemental-damage',
  Affinity = 'affinity',
  Elderseal = 'elderseal',
  FireResistance = 'fire-resistance',
  WaterResistance = 'water-resistance',
  ThunderResistance = 'thunder-resistance',
  IceResistance = 'ice-resistance',
  DragonResistance = 'dragon-resistance',
}

export interface Stat extends Identifiable {
  type: StatType;
  value?: number;
  min?: number;
  max?: number;
}

export class StatBuilder {
  private statType = StatType.None;
  readonly stat: Required<Omit<Stat, 'id'>> = {
    type: this.statType,
    value: 0,
    min: 0,
    max: 0,
    name: '',
    slug: '',
    description: '',
    icon: '',
  };

  constructor(statType: StatType = StatType.None) {
    this.statType = statType;
  }

  withValue(value: number, isClamped: boolean = false): StatBuilder {
    if (isClamped && value > this.stat.max) {
      this.stat.value = Math.max(value, this.stat.max);
      return this;
    }

    if (isClamped && value < this.stat.min) {
      this.stat.value = Math.min(value, this.stat.min);
      return this;
    }

    this.stat.value = value;
    return this;
  }

  withType(type: StatType): StatBuilder {
    if (type === null || Number(type) < 0 || type.toLocaleString().isEmpty()) {
      console.error(
        `The type provided must be greater than 0, not empty or not null.`
      );
    }

    this.stat.type = type;
    return this;
  }

  withDescription(description: string): StatBuilder {
    this.stat.description = description;
    return this;
  }

  build(): Stat {
    this.stat.name = this.statType.toCase(CaseFlags.Titlecase);
    this.stat.slug = this.statType;
    this.stat.icon = ''; // TODO:

    return this.stat;
  }
}
