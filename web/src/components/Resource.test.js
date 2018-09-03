import React from 'react';
import Resource from './Resource';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

let resource;

describe('Resource', () => {

  beforeEach(() => {
    resource = {
        id: 'id-1',
        firstName: 'FirstUser1',
        lastName: 'LastUser1'
      }
  });

  it('renders a Resource', () => {
    const subject = shallow(<Resource resource={resource} />);
    expect(toJson(subject)).toMatchSnapshot();
  });
});

