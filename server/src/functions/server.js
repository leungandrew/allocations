import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { printSchema } from 'graphql/utilities/schemaPrinter';

//This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const projects = [
  {
    id: 1,
    name: "Project Andrew",
  },
  {
    id: 2,
    name: "Project Leung",
  },
];

const typeDefs = `
type Project {
  id: ID!
  name: String
}

type Query {
  projects: [Project]
}
 `;

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

function setupGraphQLServer() {
  const graphQLServer = express();

  graphQLServer.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({schema, context: {}})
  );

  graphQLServer.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/api/graphql" })
  );

  graphQLServer.use(
    "/schema", (req, res) => {
      res.set("Content-Type", "text/plain");
      res.send(printSchema(schema));
    });

  return graphQLServer;
}

export default setupGraphQLServer;

