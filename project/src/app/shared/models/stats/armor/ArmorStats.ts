import { Defense } from '../Defense';
import { DragonResistance } from './DragonResistance';
import { FireResistance } from './FireResistance';
import { IceResistance } from './IceResistance';
import { ThunderResistance } from './ThunderResistance';
import { WaterResistance } from './WaterResistance';

export interface ArmorStats {
  defense: Defense;
  fireResistance: FireResistance;
  waterResistance: WaterResistance;
  thunderResistance: ThunderResistance;
  iceResistance: IceResistance;
  dragonResistance: DragonResistance;
}
