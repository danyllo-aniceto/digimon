import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $isSelected: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  ${({ $isSelected, theme }) => css`
    background-color: ${$isSelected ? theme.colors.BLUE : theme.colors.GRAY_500};
    color: ${theme.colors.WHITE_NEUTRAL};
    width: 169px;
    height: 68px;
    border: none;
    border: 1px solid ${theme.colors.WHITE_NEUTRAL};
    border-radius: 20px;
    font-size: 25px;
    font-weight: 400;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.BLUE};
    }
  `}
`;
