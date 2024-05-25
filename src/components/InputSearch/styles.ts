import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 1226px;
  height: 68px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 0.5);

  font-weight: 400;
  font-size: 25px;
  line-height: 30.26px;
  text-indent: 16px;

  :focus {
    outline: 0;
  }

  ::placeholder {
    font-size: 25px;
    font-weight: 400;
    line-height: 30.26px;
    text-align: left;
    color: rgba(235, 235, 235, 1);
  }
`;

export const Form = styled.form`
  display: flex;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;
