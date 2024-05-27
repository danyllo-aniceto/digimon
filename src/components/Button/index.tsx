import { StyledButton } from './styles';
import { IButtonProps } from './types';

export function Button({ children, isSelected = false, ...props }: IButtonProps) {
  return (
    <StyledButton {...props} $isSelected={isSelected}>
      {children}
    </StyledButton>
  );
}
