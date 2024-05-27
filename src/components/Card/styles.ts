import styled, { css } from 'styled-components';

export const DigimonCard = styled.div`
  ${({ theme }) => css`
    width: 250px;
    height: 334px;
    top: 561px;
    left: 261px;
    border-radius: 20px;
    border: 1px 0px 0px 0px;
    background-color: ${theme.colors.GRAY_400};
    border: 1px solid ${theme.colors.WHITE_NEUTRAL};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 18px;
  `}
`;

export const DigimonName = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  font-family: 'Doppio One', sans-serif;

  color: ${({ theme }) => theme.colors.WHITE_NEUTRAL};
`;

export const DigimonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.WHITE_NEUTRAL};
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 144px;
    height: 45px;
    border: none;
    border-radius: 20px;
    background-color: ${theme.colors.BLUE};

    font-family: 'Dosis', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: ${theme.colors.WHITE_NEUTRAL};

    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.GRAY_400};
      color: ${theme.colors.BLUE};
    }
  `}
`;
