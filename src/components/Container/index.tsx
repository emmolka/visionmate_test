import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <FullPageWrapper>
    <InnerContainer>{children}</InnerContainer>
  </FullPageWrapper>
);

export default Container;

const FullPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${({ theme }) => theme.innerBackground};
  margin: 40px 0;
  padding: 10px;
  border-radius: 10px;
`;
