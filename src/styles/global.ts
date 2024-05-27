import { createGlobalStyle } from 'styled-components';

export const mediaQuery = {
  mobileSm: '@media screen and (max-width: 420px)',
  mobile: '@media screen and (max-width: 600px)',
  tablet: '@media screen and (max-width: 768px)',
  tabletMd: '@media screen and (max-width: 900px)',
  desktop: '@media screen and (max-width: 1280px)',
  desktopSm: '@media screen and (max-width: 1366px)',
  desktopMd: '@media screen and (max-width: 1440px)',
  desktopMdLg: '@media screen and (max-width: 1553px)',
  desktopLg: '@media screen and (min-width: 1920px)',
  custom: (size: number) => `@media screen and (max-width: ${size}px)`,
};

export const COLORS = {
  WHITE_NEUTRAL: 'rgba(255, 255, 255, 1)',

  NEUTRAL: 'rgba(235, 235, 235, 1)',
  NEUTRAL_100: 'rgba(156, 156, 156, 1)',

  GRAY_400: 'rgba(255, 255, 255, 0.4)',
  GRAY_500: 'rgba(217, 217, 217, 0.5)',

  BLUE: 'rgba(0, 140, 199, 1)',

  BLACK_TEXT: 'rgba(39, 39, 39, 1)',
  BLACK_800: 'rgba(0, 0, 0, 0.8)',
  BLACK_100: 'rgba(0, 0, 0, 0.1)',

  BG_GRADIENT: 'linear-gradient(360deg, rgba(0, 140, 199, 0.5) 0%, rgba(0, 18, 63, 0.5) 100%)',
};

export type Theme = {
  colors: typeof COLORS;
  mediaQuery: typeof mediaQuery;
};

export const theme = {
  /**
   * Descrição da propriedade.
   * @type {string} - cores utilizado para color, background-color, border-color, etc.
   */
  colors: COLORS,

  /**
   * Descrição da propriedade.
   * @type {string} - utilizado para responsividade MediaQueries.
   * Exemplo: @media ${theme.mediaQuery.mobile} { flex-direction: column }
   */
  mediaQuery: mediaQuery,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  body, input, textarea, button, span, p, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    ${mediaQuery.mobile} {
      font-size: 18px !important;
    }
  }

  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    
    ${mediaQuery.mobile} {
      font-size: 22px !important;
    }
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
