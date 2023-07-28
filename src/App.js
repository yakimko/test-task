import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import DataTable from './components/DataTable';

const App = () => {
  return (
    <Provider store={store}>
      <DataTable />
    </Provider>
  );
};

export default App;