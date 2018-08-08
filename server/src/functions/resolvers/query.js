const projects = [
  {
    id: 1,
    name: "Project Andrew",
  },
  {
    id: 2,
    name: "Project Leung",
  },
  {
    id: 3,
    name: "Hello World",
  },
];

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

export default resolvers;
