import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID
      name: String
      array: [String]
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 1,
          name: "Kaayo",
          array: ["A", "B"],
        };
      },
      users: () => [
        { id: 1, name: "Kaayo", array: ["A", "B"] },
        { id: 2, name: "Caio", array: ["A", "B"] },
      ],
    },
  },
});
