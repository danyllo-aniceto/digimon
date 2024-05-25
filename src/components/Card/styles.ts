import styled from 'styled-components';

export const DigimonCard = styled.div`
  width: 250px;
  height: 334px;
  top: 561px;
  left: 261px;
  border-radius: 20px;
  border: 1px 0px 0px 0px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

export const DigimonName = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  font-family: 'Doppio One', sans-serif;

  color: rgba(255, 255, 255, 1);
`;

export const DigimonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 1);
`;

export const Button = styled.button`
  width: 144px;
  height: 45px;
  border: none;
  border-radius: 20px;
  background-color: rgba(0, 140, 199, 1);

  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(255, 255, 255, 1);

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: rgba(0, 140, 199, 1);
  }
`;
