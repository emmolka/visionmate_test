import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const redirectToUsers = () => {
    navigate("/users");
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
