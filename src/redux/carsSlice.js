import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands, fetchCarById, fetchCars } from "./operations";

const initialState = {
  allItems: [],
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 1,

  selectedCar: null,
  isLoadingSelectedCar: false,
  errorSelectedCar: null,

  brands: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCars: (state) => {
      state.items = [];
      state.page = 1;
      // state.totalPages = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
      state.isLoadingSelectedCar = false;
      state.errorSelectedCar = null;
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
        const { cars, page, totalPages } = action.payload;

        if (page === 1) {
          state.items = cars;
          state.page = 1;
          state.totalPages = totalPages || 1;
        } else {
          const newCars = cars.filter(
            (car) => !state.items.some((item) => item.id === car.id)
          );
          state.items = [...state.items, ...newCars];
        }
        if (cars.length < 12) {
          state.totalPages = state.page;
        } else {
          state.totalPages = state.page + 1;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoadingSelectedCar = true;
        state.errorSelectedCar = null;
        state.selectedCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoadingSelectedCar = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoadingSelectedCar = false;
        state.errorSelectedCar = action.payload;
      })
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCars, clearSelectedCar, setPage } = carsSlice.actions;
export default carsSlice.reducer;
