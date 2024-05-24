import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: rgba(217, 217, 217, 0.5);
  color: rgba(255, 255, 255, 1);
  width: 169px;
  height: 68px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 20px;
  font-family: Inter;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 140, 199, 1);
  }
`;
