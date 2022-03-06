import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import { getUsers } from "../fetcher";
import { UserResponse } from "../types";

const Home = (): JSX.Element => {
  const [randomUser, setRandomUser] = useState<UserResponse | undefined>();
  const navigate = useNavigate();

  const redirectToUsers = () => {
    navigate("/users");
  };

  const getUsersHandler = async () => {
    const results = await getUsers(1);
    setRandomUser(results[0]);
  };

  useEffect(() => {
    getUsersHandler();
  }, []);

  const handleRandomUser = () => {
    if (randomUser) {
      navigate(`users/${randomUser.login.username}`, {
        state: {
          user: randomUser,
        },
      });
    } else {
      alert("Something went wrong. Please try again later");
    }
  };

  return (
    <Container>
      <ContentCenterer>
        <Button title={"Users"} onClick={redirectToUsers} />
        <Button title="random user" onClick={handleRandomUser} />
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
