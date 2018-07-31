import React from 'react';
import ProjectsList, { GET_PROJECTS_QUERY } from './ProjectsList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

const mocks = [
  {
    request: {
      query: GET_PROJECTS_QUERY,
    },
    result: {
      data: {
        projects: [
          {
            id: 1,
            name: "Project A",
          },
          {
            id: 2,
             name: "Project B",
          }
        ]
      }
    }
  }
];

describe('ProjectsList', () => {
  it('renders a list of projects', () => {
    const subject = shallow(
      <MockedProvider mocks={mocks}>
        <ProjectsList/>
      </MockedProvider>
        );
    expect(toJson(subject)).toMatchSnapshot();
  });
});
