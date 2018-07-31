import React from 'react';
import gql from 'graphql-tag';
import { Query }  from 'react-apollo';

export const GET_PROJECTS_QUERY = gql`
  query getProjects {
    projects {
      name
    }
  }`;

const ProjectsList = () => {
  return (
    <Query query={GET_PROJECTS_QUERY}>
      {({loading, error, data}) => {
        if (loading || error) return (<p>Loading...</p>);
        return (
          <div>
            {
              data.projects.map(project =>
                <div>{project.name}</div>
              )
            }
          </div>
        )
      }}
    </Query>
  )
};

export default ProjectsList;
