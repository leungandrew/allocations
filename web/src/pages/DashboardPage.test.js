import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('renders ProjectLists', () => {
    const subject = shallow(<DashboardPage/>);

    expect(toJson(subject)).toMatchSnapshot();
  })
});
