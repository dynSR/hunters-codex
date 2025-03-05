import { Identifiable } from '../../interfaces/items/Identifiable';

export interface Stat extends Identifiable {
  value: number;
  min?: number;
  max?: number;
}
