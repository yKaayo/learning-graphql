import { createSchema } from "graphql-yoga";

// Schemas
import { userTypeDefs } from "./features/user/typedefs";
import { postTypeDefs } from "./features/post/typedefs";
import { commentTypeDefs } from "./features/comment/typedefs";

// Resolvers
import { userResolvers } from "./features/user/resolver";
import { postResolvers } from "./features/post/resolver";
import { commentResolvers } from "./features/comment/resolver";

export const schema = createSchema({
  typeDefs: [userTypeDefs, postTypeDefs, commentTypeDefs],
  resolvers: [userResolvers, postResolvers, commentResolvers],
});
