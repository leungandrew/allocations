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
  {
    id: 4,
    name: "Let's do this!",
  },
];

const resolvers = {
  Query: {
    projects: () => projects
  }
};

export default resolvers;
