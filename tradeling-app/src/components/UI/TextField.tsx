import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 1px solid #999;
    padding: 14px 16px;
    box-sizing: border-box;
    width: 360px;
    font-size: 16px;
    letter-spacing: 0.8px;
`;

interface ITextField {
  placeholder: string;
}

const TextField: React.FC<ITextField> = ({ placeholder }) => {

  return (
    <InputText type="text" placeholder={placeholder} />
  )
}

export default TextField;
