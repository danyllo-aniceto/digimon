import { IDigimon } from '../../../../models/IDigimon';

export interface IIDigimonList {
  loading: boolean;
  allDigimons: Array<IDigimon> | undefined;
}
