import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
`;
export const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 37px;
  width: 100%;
`;

export const Img = styled.img`
  ${({ theme }) => theme.mediaQuery.mobile} {
    width: 245px;
    height: 120px;
  }
`;
