import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }
`;
