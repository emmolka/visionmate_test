import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  value: HTMLInputElement["value"];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({ value, onChange, placeholder }: InputProps): JSX.Element => (
  <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
);

export default Input;

const StyledInput = styled.input`
  width: 100%;
  max-width: 250px;
  -webkit-appearance: none;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.background};
  border-radius: 5px;
  cursor: text;
`;
