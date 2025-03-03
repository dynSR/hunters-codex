import { Identifiable } from './identifiable';

export interface Item extends Identifiable {
  type: string | number;
  image: string;
}
