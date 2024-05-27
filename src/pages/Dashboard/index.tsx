import { ButtonContainer, CardContainer, Img, Wrapper } from './styles';

import { useCallback, useEffect, useState } from 'react';
import { IMAGES } from '../../assets';
import { BaseLayout } from '../../components/BaseLayout';
import { InputSearch } from '../../components/InputSearch';
import { useDigimon } from '../../hooks/services/Digimon/useDigimon';
import { DigimonList } from './components/DigimonList';
import { LevelList } from './components/LevelList';

export function Dashboard() {
  const { allDigimons, listLevels, loading, getAllDigimons, getDigimonByName, getDigimonsByLevel } =
    useDigimon();

  const [levelSelected, setLevelSelected] = useState('Todos');

  const handleSearch = useCallback(
    (value: string | undefined) => {
      if (value) {
        getDigimonByName(value);
        setLevelSelected('');
      } else {
        getAllDigimons();
        setLevelSelected('Todos');
      }
    },
    [getAllDigimons, getDigimonByName],
  );

  const handleClickLevel = useCallback(
    (level: string) => {
      if (level === 'Todos') {
        getAllDigimons();
      } else {
        getDigimonsByLevel(level);
      }
      setLevelSelected(level);
    },
    [getAllDigimons, getDigimonsByLevel],
  );

  useEffect(() => {
    getAllDigimons(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <Img src={IMAGES.logo} alt="logo digimon" />
      <Wrapper>
        <InputSearch onClickSearch={handleSearch} placeholder="Busca" isLoading={loading} />
        <ButtonContainer>
          <LevelList
            listLevels={listLevels}
            levelSelected={levelSelected}
            allDigimons={allDigimons}
            loading={loading}
            onClickLevel={handleClickLevel}
          />
        </ButtonContainer>
      </Wrapper>
      <CardContainer>
        <DigimonList allDigimons={allDigimons} loading={loading} />
      </CardContainer>
    </BaseLayout>
  );
}
