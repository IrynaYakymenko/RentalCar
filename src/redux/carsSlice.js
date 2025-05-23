import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 1,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCars: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const currentPage = Number(action.payload.page);
        if (currentPage === 1) {
          state.items = action.payload.cars;
          state.page = 1;
        } else {
          const newCars = action.payload.cars.filter(
            (car) => !state.items.some((item) => item.id === car.id)
          );
          state.items = [...state.items, ...newCars];
        }
        state.page = currentPage;
        state.totalPages = Number(action.payload.totalPages);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCars } = carsSlice.actions;
export default carsSlice.reducer;
