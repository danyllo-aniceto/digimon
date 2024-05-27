import { ReactNode } from 'react';
import { Span } from './styles';

export function EmptyState({ children }: { children: ReactNode }) {
  return <Span>{children}</Span>;
}
