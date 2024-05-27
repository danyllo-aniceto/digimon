import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.BLACK_800};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    width: 687px;
    height: 772px;
    background-color: ${theme.colors.NEUTRAL};
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 2px 10px ${theme.colors.BLACK_100};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${theme.mediaQuery.mobile} {
      height: 580px;
    }
  `}
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  background: none;
`;

export const Name = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 36.31px;
  text-align: left;
  color: ${({ theme }) => theme.colors.BLUE};
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ImageModal = styled.img`
  position: absolute;
  width: 363px;
  height: 363px;
  top: -250px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;

  ${({ theme }) => theme.mediaQuery.mobile} {
    width: 210px;
    height: 210px;
    top: -80px;
  }
`;

export const DescriptionModal = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE_NEUTRAL};
  padding: 32px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

export const LevelDigimon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const BluePoint = styled.div`
  width: 15px;
  height: 15px;
  background: ${({ theme }) => theme.colors.BLUE};
  border-radius: 50%;
`;

export const NameLevel = styled.h3`
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.NEUTRAL_100};
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: 400;
    color: ${theme.colors.NEUTRAL_100};

    ${theme.mediaQuery.mobile} {
      font-size: 16px !important;
    }
    ${theme.mediaQuery.mobileSm} {
      font-size: 14px !important;
    }
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.BLACK_TEXT};

    ${theme.mediaQuery.mobile} {
      font-size: 16px !important;
    }
    ${theme.mediaQuery.mobileSm} {
      font-size: 14px !important;
    }
  `}
`;
