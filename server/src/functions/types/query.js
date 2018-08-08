import project from './project';
const query = `
type Query {
  projects: [Project]
}
`;

export default [query, project];
