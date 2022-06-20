import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as User, resolvers as userResolvers } from "./user.js";
import {
  typeDefs as Project,
  resolvers as projectResolvers,
} from "./project.js";
import { typeDefs as Auth, resolvers as authResolvers } from "./auth.js";

export const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: { ...userResolvers.Query, ...projectResolvers.Query },
  Mutation: { ...authResolvers.Mutation, ...projectResolvers.Mutation },
};

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, User, Project, Auth],
  resolvers: resolvers,
});
