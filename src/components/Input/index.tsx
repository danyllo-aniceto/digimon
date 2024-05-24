import { forwardRef } from 'react';
import { IMAGES } from '../../assets';
import { Img, StyledInput, Wrapper } from './styles';
import { IInputProps } from './types';

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <Wrapper>
      <StyledInput {...props} ref={ref} />
      <Img src={IMAGES.search} alt="Busca" />
    </Wrapper>
  );
});
