import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/Auth/SignIn";
import { SignUp } from "./components/Auth/SignUp";
import { NavHeader } from "./components/Nav/NavHeader";
import { Theme } from "./themes/Theme";
import { UserContextProvider } from "./context/UserContextProvider";
import { PortfolioPage } from "./components/Portfolio/PortfolioPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Theme>
          <NavHeader>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<PortfolioPage />} />
              </Routes>
            </BrowserRouter>
          </NavHeader>
        </Theme>
      </UserContextProvider>
    </ApolloProvider>
  );
}

export default App;
