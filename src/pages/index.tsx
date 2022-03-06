import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";

const Home = (): JSX.Element => {
  const history = useHistory();

  const redirectToUsers = () => {
    history.push("/users");
  };

  return (
    <Container>
      <ContentCenterer>
        <Button title={"Users"} onClick={redirectToUsers} />
      </ContentCenterer>
    </Container>
  );
};

export default Home;

const ContentCenterer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
