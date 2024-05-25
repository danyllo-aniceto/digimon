import { useState } from 'react';
import { Button, DigimonCard, DigimonImage, DigimonName } from './styles';
import Modal from './../Modal';
import { ICardProps } from './types';

export function Card({ name, img }: ICardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <div>
      <DigimonCard>
        <DigimonName>{name}</DigimonName>
        <DigimonImage src={img} alt="Digimon" />
        <Button onClick={handleToggleModal}>Ver detalhes</Button>
      </DigimonCard>
      {modalOpen && <Modal onClose={handleToggleModal} />}
    </div>
  );
}
