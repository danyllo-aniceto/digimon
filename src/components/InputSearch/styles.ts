import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 1226px;
    height: 68px;
    border: none;
    border: 1px solid ${theme.colors.WHITE_NEUTRAL};
    border-radius: 20px;
    background-color: ${theme.colors.GRAY_500};
    padding-right: 55px;

    font-weight: 400;
    font-size: 25px;
    line-height: 30.26px;
    text-indent: 16px;

    :focus {
      outline: 2px solid ${theme.colors.BLUE};
    }

    ::placeholder {
      font-size: 25px;
      font-weight: 400;
      line-height: 30.26px;
      text-align: left;
      color: ${theme.colors.WHITE_NEUTRAL};
    }

    ${theme.mediaQuery.desktop} {
      width: 760px;
    }

    ${theme.mediaQuery.tablet} {
      width: 580px;
    }

    ${theme.mediaQuery.mobile} {
      width: 420px;

      ::placeholder {
        font-size: 22px;
      }
    }

    ${theme.mediaQuery.mobileSm} {
      width: 280px;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  position: relative;
`;

export const Img = styled.img`
  width: 26px;
  height: 26px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  width: 36px;
  height: 36px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.BLUE};
  }
`;

export const Spinner = styled.span`
  position: absolute;
  width: 26px;
  height: 26px;
  right: 20px;
  top: 32%;

  border: 2px solid ${({ theme }) => theme.colors.WHITE_NEUTRAL};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
