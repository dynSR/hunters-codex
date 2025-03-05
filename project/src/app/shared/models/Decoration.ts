import { Identifiable } from '../interfaces/items/Identifiable';

export enum SlotLevel {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

export interface Decoration extends Identifiable {
  slotLevel: SlotLevel;
}
