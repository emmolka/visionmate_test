import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../../components/Container";
import User from "../../components/User";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { getUsers } from "../../fetcher";

import { UserResponse } from "../../types";

import useDebounce from "../../utils/debounce";

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<UserResponse[] | []>([]);
  const [cachedUsers, setCachedUsers] = useState<UserResponse[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  const getUsersHandler = async () => {
    try {
      setLoading(true);
      const results = await getUsers();
      setUsers(results);
      setCachedUsers(results);
    } catch (e) {
      alert(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const anonymizeEmailsHandler = () => {
    const usersWithXEmails = users.map((user) => ({
      ...user,
      email: "X",
    }));
    setUsers(usersWithXEmails);
  };

  useEffect(() => {
    getUsersHandler();
  }, []);

  useEffect(() => {
    if (debouncedSearchValue) {
      const searchedArray = users.filter((user) => {
        const lowerCasedName = user.name.first?.toLowerCase();
        const lowerCasedCity = user.location.city.toLowerCase();
        return (
          lowerCasedName.includes(debouncedSearchValue?.toLowerCase()) ||
          lowerCasedCity.includes(debouncedSearchValue?.toLowerCase())
        );
      });
      setUsers(searchedArray);
    } else {
      setUsers(cachedUsers);
    }

    // console.log(searchedArray);
  }, [debouncedSearchValue]);

  return (
    <Container>
      <InnerWrapper>
        {loading && <LoadingText>Loading ...</LoadingText>}
        {!loading &&
          (users.length > 0 ? (
            <UserWrapper>
              <InputWrapper>
                <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Place first name or city"
                />
                <Button title="anonymize" onClick={anonymizeEmailsHandler} />
              </InputWrapper>
              {users.map(
                ({
                  email,
                  picture: { medium },
                  name: { first, last },
                  location: { city },
                }) => (
                  <User
                    key={`${email}${city}${medium}`}
                    email={email}
                    imageSrc={medium}
                    firstName={first}
                    lastName={last}
                    city={city}
                  />
                )
              )}
            </UserWrapper>
          ) : (
            <LoadingText>No results</LoadingText>
          ))}
      </InnerWrapper>
    </Container>
  );
};

export default Users;

const InnerWrapper = styled.div`
  width: 100%;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.background};
`;
