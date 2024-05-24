import { Container } from './styles';
import { IBaseLayoutProps } from './types';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return <Container>{children}</Container>;
}
