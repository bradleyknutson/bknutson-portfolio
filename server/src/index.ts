import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import path from "path";

import { authMiddleware } from "./utils/auth.js";
import { schema } from "./schemas/schema.js";
import db from "./config/config.js";

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
}

const startApolloServer = async () => {
  await server.start();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(
        `GraphQL Path: http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
