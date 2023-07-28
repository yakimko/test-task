import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TableBar from './TableBar';

describe('TableBar', () => {
  let props;
  let shallowTableBar;
  let renderedTableBar;
  let mountedTableBar;

  const shallowTestComponent = () => {
    if (!shallowTableBar) {
      shallowTableBar = shallow(<TableBar {...props} />);
    }
    return shallowTableBar;
  };

  const renderTestComponent = () => {
    if (!renderedTableBar) {
      renderedTableBar = render(<TableBar {...props} />);
    }
    return renderedTableBar;
  };

  const mountTestComponent = () => {
    if (!mountedTableBar) {
      mountedTableBar = mount(<TableBar {...props} />);
    }
    return mountedTableBar;
  };  

  beforeEach(() => {
    props = {};
    shallowTableBar = undefined;
    renderedTableBar = undefined;
    mountedTableBar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
