import { gql, AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.js";
import User from "../models/User.js";

interface credentials {
  password: string;
  email: string;
}

export const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  extend type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

export const resolvers = {
  Query: {},
  Mutation: {
    addUser: async (_parent: any, args: credentials) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_parent: any, { email, password }: credentials) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
