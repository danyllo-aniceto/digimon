import { IDigimon } from '../../../../models/IDigimon';

export interface ILevelListProps {
  loading?: boolean;
  levelSelected: string;
  listLevels: Array<string> | undefined;
  allDigimons: Array<IDigimon>;
  onClickLevel: (level: string) => void;
}
