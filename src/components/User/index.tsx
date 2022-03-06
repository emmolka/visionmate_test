import React from "react";
import styled from "styled-components";
import { UserComponent } from "../../types";

const User = ({
  email,
  imageSrc,
  firstName,
  lastName,
  city,
  onClick,
  username,
  street,
  postcode,
}: UserComponent): JSX.Element => (
  <UserWrapper onClick={onClick}>
    <StyledImage src={imageSrc} />
    <UserInfoWrapper>
      <Name>
        {firstName}
        &nbsp;
        {lastName}
      </Name>
      {email && <span>Email: {email}</span>}
      {username && <span>Username: {username}</span>}
      <span> City: {city}</span>
      {street && (
        <span>
          Street: {street.name} {street.number}
        </span>
      )}
      {postcode && <span> Postcode: {postcode}</span>}
    </UserInfoWrapper>
  </UserWrapper>
);

export default User;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 75px;
  align-items: center;
  border-radius: 10px;
  margin-top: 5px;
  background: #fff;
  padding: 5px;
  cursor: pointer;
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
