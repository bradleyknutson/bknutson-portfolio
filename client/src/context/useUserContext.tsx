import React, { useContext } from "react";
import { UserContext } from "./UserContextProvider";

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("useUserContext was used outside of the Provider");
  }
  return userContext;
};
