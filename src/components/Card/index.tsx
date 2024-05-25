import { useState } from 'react';
import { Button, DigimonCard, DigimonImage, DigimonName } from './styles';
import Modal from './../Modal';

export function Card() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <div>
      <DigimonCard>
        <DigimonName>guig8tuugugyu</DigimonName>
        <DigimonImage src="https://digimon.shadowsmith.com/img/koromon.jpg" />
        <Button onClick={handleToggleModal}>Ver detalhes</Button>
      </DigimonCard>
      {modalOpen && <Modal onClose={handleToggleModal} />}
    </div>
  );
}
