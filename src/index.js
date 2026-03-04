import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

// Schema
import { schema } from "./graphql/schema.js";

// Context
import { context } from "./graphql/context.js";

const yoga = createYoga({ schema, context });

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
