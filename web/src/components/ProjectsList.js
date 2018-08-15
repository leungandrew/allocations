import React from 'react';
import gql from 'graphql-tag';
import { Query }  from 'react-apollo';
import Project from './Project';

export const GET_PROJECTS_QUERY = gql`
  query getProjects {
    projects {
      id
      name
    }
  }`;

const ProjectsList = () => {
  return (
    <Query query={GET_PROJECTS_QUERY}>
      {({loading, error, data}) => {
        if (loading || error) return (<p>Loading...</p>);
        return (
          <div id="project-list">
            {
              data.projects.map(project =>
                <Project project={project} />
              )
            }
          </div>
        )
      }}
    </Query>
  )
};

export default ProjectsList;
