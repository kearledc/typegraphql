import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { HelloResolver } from "./resolvers/Hello";

const main = async () => {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  });

  const app = express();
  const server = new ApolloServer({
    schema,
  });
  server.applyMiddleware({
    app,
    path: "/typegraphql",
  });

  const PORT = process.env.PORT || 3005;

  app.listen(PORT, () => console.log(`Connected at Port ${PORT}`));
};

main();
