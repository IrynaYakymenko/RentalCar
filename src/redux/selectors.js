export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectIsLoadingSelectedCar = (state) =>
  state.cars.isLoadingSelectedCar;
export const selectErrorSelectedCar = (state) => state.cars.errorSelectedCar;
