import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, onClick }: ButtonProps): JSX.Element => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.lighterBackground};
  padding: 10px;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.lighterBackground};
  color: ${({ theme }) => theme.white};
`;
