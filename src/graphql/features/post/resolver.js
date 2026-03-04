export const postResolvers = {
  Query: {
    post: async (_, { id }, { getPosts }) => {
      console.log(id);
      
      if (!id || isNaN(id)) {
        throw new Error("Type a valid ID");
      }

      try {
        const res = await getPosts(id);

        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    posts: async (_, __, { getPosts }) => {
      try {
        const res = await getPosts();

        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },
};
