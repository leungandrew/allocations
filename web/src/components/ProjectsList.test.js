import React from 'react';
import ProjectsList from './ProjectsList';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('ProjectsList', () => {
  it('renders a list of projects', () => {
    const tree = renderer.create(<ProjectsList/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
