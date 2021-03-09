import React, {useState} from 'react';
import styled from 'styled-components';

const InputSelect = styled.div`
  --select-border: #777;
  --select-arrow: var(--select-border);
  border: 1px solid var(--select-border);
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  display: grid;
  grid-template-areas: "select";
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 88px;

  & select {
    outline: none;
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    grid-area: select;
    color: var(--select-border);
  }

  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
  &:after {
    grid-area: select;
    justify-self: end;
    margin-right: 8px;
  }
`;

interface IDropDown {
  value: any;
  onChange: Function;
}

const DropDown: React.FC<IDropDown> = (props) => {
  const [value, setValue] = useState(props.value)

  const onchange: any = (e: Event) => {
    const target = e.target as HTMLInputElement
    setValue(target?.value);
    props.onChange(target?.value);
  }

  return (
    <InputSelect>
      <select {...props} onChange={onchange} value={value}>
        {props.children}
      </select>
    </InputSelect>
  );
};

export default DropDown;
