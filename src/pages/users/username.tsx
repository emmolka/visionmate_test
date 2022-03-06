import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserResponse } from "../../types";
import Container from "../../components/Container";
import User from "../../components/User";

const UserPage = (): JSX.Element => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div>Ooooops, no such user</div>;
  }

  const { user } = state as { user: UserResponse };

  return (
    <Container>
      <div onClick={() => navigate(-1)}>Back</div>
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
