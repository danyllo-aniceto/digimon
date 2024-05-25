import { FormEvent, useRef } from 'react';
import { IMAGES } from '../../assets';
import { Button, Form, Img, StyledInput } from './styles';
import { IInputProps } from './types';

export const InputSearch = ({ onClickSearch, ...restInput }: IInputProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = valueRef.current?.value;
    if (value) {
      onClickSearch(value);
    }
  };

  return (
    <Form id="input-search" onSubmit={handleSubmit}>
      <StyledInput {...restInput} ref={valueRef} />
      <Button type="submit" form="input-search">
        <Img src={IMAGES.search} alt="Busca" />
      </Button>
    </Form>
  );
};
