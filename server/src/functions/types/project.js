import resource from './resource';
const project = `
type Project {
  id: ID!
  name: String
  resources: [Resource]
}
`;

export default () => [project, resource];
