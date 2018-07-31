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
  <Query query={GET_PROJECTS_QUERY}>
    {({loading, error, data}) => {
      if (loading || error) return null;
      return (
        <div>
          <li>Project A</li>
          <li>Project B</li>
        </div>
      )
    }}
  </Query>
};

export default ProjectsList;
