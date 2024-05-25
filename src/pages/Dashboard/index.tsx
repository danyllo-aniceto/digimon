import { Body, ButtonContainer, CardContainer, Wrapper } from './styles';

import { InputSearch } from '../../components/InputSearch';
import { IMAGES } from '../../assets';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Dashboard() {
  const handleSearch = (value: string) => {
    console.log('buscar na api', value);
  };

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Body>
  );
}
