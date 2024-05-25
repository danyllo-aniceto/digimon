import { IDigimon } from '../../models/IDigimon';

export interface ModalProps {
  onClose: () => void;
  digimon: IDigimon;
}
