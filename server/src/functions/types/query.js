import project from './project';
const query = `
type Query {
  projects: [Project]
  project(id: ID!): Project
}
`;

export default () => [query, project];
