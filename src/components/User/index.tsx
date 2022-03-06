import React from "react";
import styled from "styled-components";
import { UserComponent } from "../../types";

const User = ({
  email,
  imageSrc,
  firstName,
  lastName,
  city,
}: UserComponent): JSX.Element => (
  <UserWrapper>
    <StyledImage src={imageSrc} />
    <UserInfoWrapper>
      <Name>
        {firstName}
        &nbsp;
        {lastName}
      </Name>
      <span>Email: {email}</span>
      <span> City: {city}</span>
    </UserInfoWrapper>
  </UserWrapper>
);

export default User;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.font};
  font-size: 12px;
  margin-left: 15px;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
