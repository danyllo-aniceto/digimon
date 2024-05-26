import { Body, ButtonContainer, CardContainer, Wrapper } from './styles';

import { useEffect } from 'react';
import { IMAGES } from '../../assets';
import { Button } from '../../components/Button';
import { InputSearch } from '../../components/InputSearch';
import { useDigimon } from '../../hooks/services/Digimon/useDigimon';
import { DigimonList } from './components/DigimonList';

export function Dashboard() {
  const { allDigimons, loading, levels, getAllDigimons, getDigimonByName, getAllDigimonByLevel } =
    useDigimon();

  const handleSearch = (value: string | undefined) => {
    console.log('value', value);
    if (value) {
      getDigimonByName(value);
    } else {
      getAllDigimons();
    }
  };

  useEffect(() => {
    getAllDigimons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Body>
      <img src={IMAGES.logo} alt="logo digimon" />
      <Wrapper>
        <InputSearch onClickSearch={handleSearch} placeholder="Busca" />
        <ButtonContainer>
          <Button onClick={getAllDigimons}>Todos</Button>
          {levels.map(level => (
            <Button key={level} onClick={() => getAllDigimonByLevel(level)}>
              {level}
            </Button>
          ))}
        </ButtonContainer>
      </Wrapper>
      <CardContainer>
        <DigimonList allDigimons={allDigimons} loading={loading} />
      </CardContainer>
    </Body>
  );
}
