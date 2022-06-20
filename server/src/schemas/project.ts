import { gql } from "apollo-server-express";
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
      const projects = await Project.find();
      return projects;
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
