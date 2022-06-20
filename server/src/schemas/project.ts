import { AuthenticationError, gql } from "apollo-server-express";
import Project from "../models/Project.js";

export const typeDefs = gql`
  type Project {
    _id: ID!
    title: String!
    description: String!
    github: String!
    demo: String!
    image: String!
  }

  input ProjectInput {
    title: String!
    description: String!
    github: String!
    demo: String!
    image: String!
  }

  extend type Query {
    allProjects: [Project]
  }

  extend type Mutation {
    createProject(projectInput: ProjectInput): Project
  }
`;

export const resolvers = {
  Query: {
    allProjects: async (_parent: any, args: any, context: any) => {
      if (context.user && context.user.data.admin) {
        const projects = await Project.find();
        return projects;
      }
      throw new AuthenticationError("Not an admin");
    },
  },
  Mutation: {
    createProject: async (
      _parent: any,
      { projectInput }: any,
      context: any
    ) => {
      const newProject = await Project.create(projectInput);
      return newProject;
    },
  },
};
