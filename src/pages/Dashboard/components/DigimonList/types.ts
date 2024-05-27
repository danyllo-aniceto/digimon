import { IDigimon } from '../../../../models/IDigimon';

export interface IIDigimonListProps {
  loading: boolean;
  allDigimons: Array<IDigimon> | undefined;
}
