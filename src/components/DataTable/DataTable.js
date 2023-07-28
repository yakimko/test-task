import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';

import { PieChart } from '@mui/x-charts';

import './DataTable.css';

import Filter from '../Filter/Filter';

import { decreaseProductCount, fetchData } from '../../redux/dataSlice';

import { columnTitles } from './columns';

import TableBar from '../TableBar';

const DataTableComponent = () => {
  const dispatch = useDispatch();
  const { items, status, error, filter } = useSelector((state) => state.data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const filteredItems = items.filter(
    (item) =>
      item.productName.toLowerCase().includes(filter.toLowerCase()) ||
      item.companyName.toLowerCase().includes(filter.toLowerCase())
  );

  const handleBuy = (id, event) => {
    event.stopPropagation();

    dispatch(decreaseProductCount({ itemId: id }));
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleFilterButtonClick = () => {
    setFilterOpen(!isFilterOpen);
  }

  const inStock = filteredItems.filter((item) => item.productCount).length;
  const outOfStocks = filteredItems.length - inStock;

  return (
    <div>
      <div className="container">
        {isFilterOpen && <div className="filter">
          <Filter />
        </div>}
        <div className='table-wrapper'>
          <TableBar rowCount={filteredItems.length} onFilterButtonClick={handleFilterButtonClick} />
          <TableContainer className="table" component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {columnTitles.map((title) => (
                    <TableCell className="column">{title}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow
                    className={`row ${selectedRow === item ? 'selected' : ''}`}
                    key={item.id}
                    onClick={() => handleRowClick(item)}
                  >
                    <TableCell className="column">{item.productName}</TableCell>
                    <TableCell className="column">{item.companyName}</TableCell>
                    <TableCell>{item.color}</TableCell>
                    <TableCell className="column">
                      {item.productCount ? 'In Stock' : 'Out of stocks'}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.productCount}</TableCell>
                    <TableCell>{item.reviewsCount}</TableCell>
                    <TableCell className="column">{item.sellerLocation.label}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={(event) => handleBuy(item.id, event)}
                        disabled={item.productCount <= 0}
                      >
                        Buy
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {selectedRow && (
          <div className="image-wrapper">
            <img className="image" src={selectedRow.image} alt="" />
          </div>
        )}
      </div>
      {!!filteredItems.length && <div className='chart'>
        <PieChart
          height={400}
          width={400}
          series={[
            {
              arcLabel: (item) => `${(item.value / filteredItems.length * 100).toFixed(0)}%`,
              data: [
                { id: 1, value: inStock, label: 'In stock' },
                { id: 2, value: outOfStocks, label: 'Out of stocks' },
              ],
            },
          ]}
          legend={{
            directon: 'row',
            position: {
              vertical: 'top',
              horizontal: 'middle'
            }
          }}
          sx={{
            '--ChartsLegend-rootOffsetY': '0',
          }}
        />
      </div>}
    </div>
  );
};

export default DataTableComponent;
