export const context = () => {
  return {
    getUsers: (path) =>
      fetch(`http://localhost:3000/users${path ? `/${path}` : "/"}`),
    getPosts: (path) =>
      fetch(`http://localhost:3000/posts${path ? `/${path}` : "/"}`),
    getComments: (path) =>
      fetch(`http://localhost:3000/comments${path ? `/${path}` : "/"}`),
  };
};
