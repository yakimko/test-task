import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  randomPrice,
  randomCompanyName,
  randomCountry,
  randomId,
  randomInt,
} from '@mui/x-data-grid-generator';

// fake api call
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            new Array(7).fill(null).map(item => ({
              id: randomId(),
              productName: 'Shoe #' + randomInt(1, 100),
              companyName: randomCompanyName(),
              color: ['blue', 'red', 'white', 'green', 'black'][randomInt(0, 4)],
              price: randomPrice(1, 500),
              productCount: randomInt(0, 20),
              reviewsCount: randomInt(1, 100),
              sellerLocation: randomCountry(),
              image: [
                'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1600',
              ][randomInt(0, 6)]
            }))
          ),
        1000
      );
    })
);

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], status: 'idle', error: null, filter: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase('data/updateItems', (state, action) => {
        state.items = action.payload;
      });
  },
});

export const { setFilter } = dataSlice.actions;

export default dataSlice.reducer;
