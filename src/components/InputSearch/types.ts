import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  onClickSearch: (value: string | undefined) => void;
}
