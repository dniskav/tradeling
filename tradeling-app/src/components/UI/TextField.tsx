import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const InputText = styled.input`
    border: 1px solid #999;
    padding: 14px 16px;
    box-sizing: border-box;
    width: 360px;
    font-size: 16px;
    letter-spacing: 0.8px;
`;

const TextField: React.FC<InputProps> = (props) => {

  return (
    <InputText {...props} />
  )
}

export default TextField;
