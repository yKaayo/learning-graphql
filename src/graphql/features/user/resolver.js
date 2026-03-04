export const userResolvers = {
  Query: {
    user: async (_, { id }, { getUsers }) => {
      if (!id || isNaN(id)) {
        throw new Error("Type a valid ID");
      }

      try {
        const res = await getUsers(id);

        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    users: async (_, __, { getUsers }) => {
      try {
        const res = await getUsers();

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
