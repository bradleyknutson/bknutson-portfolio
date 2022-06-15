import { useQuery } from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";
import { ME_QUERY } from "../utils/graphql/authentication";

export const UserContext = createContext({
  __typename: "",
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  fullName: "",
  loggedIn: false,
});

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({
    __typename: "",
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    fullName: "",
    loggedIn: false,
  });
  const { loading, error: meQueryError, data: userData } = useQuery(ME_QUERY);

  useEffect(() => {
    if (userData) {
      setUser({ ...userData.me, loggedIn: true });
    }
  }, [userData]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
