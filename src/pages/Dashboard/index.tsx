import { Body, ButtonContainer, CardContainer, Wrapper } from './styles';

import { InputSearch } from '../../components/InputSearch';
import { IMAGES } from '../../assets';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useEffect } from 'react';
import { useDigimon } from '../../hooks/services/Digimon/useDigimon';
import { Loading } from '../../components/Loading';

export function Dashboard() {
  const { allDigimons, loading, getAllDigimons } = useDigimon();

  const handleSearch = (value: string) => {
    console.log('buscar na api', value);
  };

  console.log('allDigimons', allDigimons);

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
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
          <Button onClick={() => console.log('clicou')}>Test</Button>
        </ButtonContainer>
      </Wrapper>
      <CardContainer>
        {loading ? (
          <Loading />
        ) : (
          allDigimons.map(({ img, level, name }) => (
            <Card key={name} img={img} name={name} level={level} />
          ))
        )}
      </CardContainer>
    </Body>
  );
}
