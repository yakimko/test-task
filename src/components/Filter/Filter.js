import React from 'react';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { setFilter } from '../../redux/dataSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;

    dispatch(setFilter(filterValue));
  };

  return (
    <TextField
      label="Filter"
      variant="outlined"
      size="small"
      onChange={handleFilterChange}
    />
  );
};

export default Filter;