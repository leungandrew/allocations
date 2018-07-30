import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('renders ProjectLists', () => {
    const tree = renderer.create(<DashboardPage/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
