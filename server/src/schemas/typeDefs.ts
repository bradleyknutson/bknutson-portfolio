import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    fullName: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
