import { ApolloError, AuthenticationError, gql } from "apollo-server-express";
import User from "../models/User.js";

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    fullName: String!
    admin: Boolean
  }

  extend type Query {
    me: User
  }
`;

export const resolvers = {
  Query: {
    me: async (_parent: any, args: any, context: any) => {
      if (context.user) {
        const { _id: userId } = context.user.data;
        try {
          const userData = await User.findOne({ _id: userId }).select(
            "-__v -password"
          );

          return userData;
        } catch (err) {
          throw new ApolloError(err);
        }
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};
