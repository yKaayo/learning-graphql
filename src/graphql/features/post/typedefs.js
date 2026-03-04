import { gql } from "graphql-tag";

export const postTypeDefs = gql`
  type Query {
    post(id: ID!): Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    authorId: Int!
    createdAt: String!
  }
`;
