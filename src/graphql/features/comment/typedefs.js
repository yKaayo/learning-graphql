import { gql } from "graphql-tag";

export const commentTypeDefs = gql`
  type Query {
    comment(id: ID!): Comment!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    postId: Int!
    authorId: Int!
  }
`;
