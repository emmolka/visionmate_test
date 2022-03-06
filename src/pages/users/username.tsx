import React from "react";
import { useLocation } from "react-router-dom";
import { UserResponse } from "../../types";
import Container from "../../components/Container";
import User from "../../components/User";

const UserPage = (): JSX.Element => {
  const { state } = useLocation();

  if (!state) {
    return <div>Ooooops, no such user</div>;
  }

  const { user } = state as { user: UserResponse };

  return (
    <Container>
      <User
        username={user.login.username}
        firstName={user.name.first}
        lastName={user.name.last}
        imageSrc={user.picture.large}
        city={user.location.city}
        street={user.location.street}
        postcode={user.location.postcode}
      />
    </Container>
  );
};

export default UserPage;
