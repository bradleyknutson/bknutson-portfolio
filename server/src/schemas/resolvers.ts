import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.js";
import User from "../models/User.js";

interface credentials {
  password: string;
  email: string;
}

export const resolvers = {
  Query: {
    me: async (_parent: any, args: any, context: any) => {
      if (context.user) {
        const { _id: userId } = context.user.data;
        const userData = await User.findOne({ _id: userId }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
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
