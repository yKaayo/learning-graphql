export const commentResolvers = {
  Query: {
    comment: async (_, { id }, { getComments }) => {
      if (!id || isNaN(id)) {
        throw new Error("Type a valid ID");
      }

      try {
        const res = await getComments(id);

        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    comments: async (_, __, { getComments }) => {
      try {
        const res = await getComments();

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
