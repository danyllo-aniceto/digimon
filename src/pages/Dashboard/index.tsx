import { Body, ButtonContainer, CardContainer, Wrapper } from './styles';

import { Input } from '../../components/Input';
import { IMAGES } from '../../assets';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Dashboard() {
  return (
    <Body>
      <img src={IMAGES.logo} alt="logo digimon" />
      <Wrapper>
        <Input placeholder="Busca" />
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
