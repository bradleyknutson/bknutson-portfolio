import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as User, resolvers as userResolvers } from "./user.js";
import {
  typeDefs as Project,
  resolvers as projectResolvers,
} from "./project.js";
import { typeDefs as Auth, resolvers as authResolvers } from "./auth.js";

const { Query: authQuery, Mutation: authMutation } = authResolvers;
const { Query: projectQuery, Mutation: projectMutation } = projectResolvers;
const { Query: userQuery } = userResolvers;

export const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: { ...authQuery, ...projectQuery, ...userQuery },
  Mutation: { ...authMutation, ...projectMutation },
};

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, User, Project, Auth],
  resolvers: resolvers,
});
