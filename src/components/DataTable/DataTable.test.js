import React from 'react';
import { shallow, render, mount } from 'enzyme';
import DataTable from './DataTable';

describe('DataTable', () => {
  let props;
  let shallowDataTable;
  let renderedDataTable;
  let mountedDataTable;

  const shallowTestComponent = () => {
    if (!shallowDataTable) {
      shallowDataTable = shallow(<DataTable {...props} />);
    }
    return shallowDataTable;
  };

  const renderTestComponent = () => {
    if (!renderedDataTable) {
      renderedDataTable = render(<DataTable {...props} />);
    }
    return renderedDataTable;
  };

  const mountTestComponent = () => {
    if (!mountedDataTable) {
      mountedDataTable = mount(<DataTable {...props} />);
    }
    return mountedDataTable;
  };  

  beforeEach(() => {
    props = {};
    shallowDataTable = undefined;
    renderedDataTable = undefined;
    mountedDataTable = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
