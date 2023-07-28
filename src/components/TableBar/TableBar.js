import React from 'react';

import { Button, Typography, Toolbar } from '@mui/material';

const TableBar = ({ rowCount, onFilterButtonClick }) => {
  return (
    <Toolbar>
      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
        Number of Products: {rowCount}
      </Typography>
      <Button variant="outlined" onClick={onFilterButtonClick}>
        Filter
      </Button>
    </Toolbar>
  );
};

export default TableBar;