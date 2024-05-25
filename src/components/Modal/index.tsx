import { IMAGES } from '../../assets';
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  TopModal,
  Name,
  ContentModal,
  ImageModal,
  DescriptionModal,
  LevelDigimon,
  BluePoint,
  NameLevel,
  Description,
  Span,
} from './styles';
import { ModalProps } from './types';

function Modal({ onClose, digimon: { img, level, name } }: ModalProps) {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalWrapper onClick={handleWrapperClick}>
      <ModalContent>
        <TopModal>
          <Name>{name}</Name>
          <CloseButton onClick={onClose}>
            <img src={IMAGES.close} alt="close modal" color="rgba(156, 156, 156, 1)" />
          </CloseButton>
        </TopModal>
        <ContentModal>
          <ImageModal src={img} alt={name} />
          <DescriptionModal>
            <LevelDigimon>
              <BluePoint />
              <NameLevel>{level}</NameLevel>
            </LevelDigimon>
            <Description>
              <Span>Descrição: </Span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur quas autem harum esse quod rerum, qui cum, temporibus molestiae eveniet,
              officia voluptatibus nesciunt officiis? Maxime porro possimus asperiores libero unde?
            </Description>
          </DescriptionModal>
        </ContentModal>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
