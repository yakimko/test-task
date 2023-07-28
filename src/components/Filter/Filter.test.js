import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Filter from './Filter';

describe('Filter', () => {
  let props;
  let shallowFilter;
  let renderedFilter;
  let mountedFilter;

  const shallowTestComponent = () => {
    if (!shallowFilter) {
      shallowFilter = shallow(<Filter {...props} />);
    }
    return shallowFilter;
  };

  const renderTestComponent = () => {
    if (!renderedFilter) {
      renderedFilter = render(<Filter {...props} />);
    }
    return renderedFilter;
  };

  const mountTestComponent = () => {
    if (!mountedFilter) {
      mountedFilter = mount(<Filter {...props} />);
    }
    return mountedFilter;
  };  

  beforeEach(() => {
    props = {};
    shallowFilter = undefined;
    renderedFilter = undefined;
    mountedFilter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
