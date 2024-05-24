import { StyledButton } from './styles';
import { IButtonProps } from './types';

export function Button({ children, ...props }: IButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
