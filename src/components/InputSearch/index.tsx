import { FormEvent, useRef } from 'react';
import { IMAGES } from '../../assets';
import { Button, Form, Img, Spinner, StyledInput } from './styles';
import { IInputProps } from './types';

export const InputSearch = ({ onClickSearch, isLoading = false, ...restInput }: IInputProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = valueRef.current?.value;

    onClickSearch(value);
  };

  return (
    <Form id="input-search" onSubmit={handleSubmit}>
      <StyledInput {...restInput} ref={valueRef} />
      {isLoading ? (
        <Spinner />
      ) : (
        <Button type="submit" form="input-search">
          <Img src={IMAGES.search} alt="Busca" />
        </Button>
      )}
    </Form>
  );
};
