import React from 'react';
import ResourceList from './ResourceList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

let resources;

describe('ResourceList', () => {

  beforeEach(() => {
    resources = [
      {
        id: 'id-1',
        firstName: 'FirstUser1',
        lastName: 'LastUser1'
      },
      {
        id: 'id-2',
        firstName: 'FirstUser2',
        lastName: 'LastUser2'
      }
    ];
  });

  it('renders a list of Resources', () => {
    const subject = shallow(<ResourceList resources={resources} />);
    expect(toJson(subject)).toMatchSnapshot();
  });
});

