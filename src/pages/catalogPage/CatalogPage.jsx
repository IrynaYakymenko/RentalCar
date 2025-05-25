import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";

import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import ListCar from "../../components/List/ListCar";
import s from "./CatalogPage.module.css";
import CarFilters from "../../components/CarFilters/CarFilters";
import { clearCars, setPage } from "../../redux/carsSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const allCars = useSelector((state) => state.cars.items);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const [filters, setFilters] = useState({
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  });

  useEffect(() => {
    dispatch(fetchCars({ ...filters, page }));
  }, [dispatch, filters, page]);

  const handleApplyFilters = (newFilters) => {
    dispatch(clearCars());
    dispatch(setPage(1));
    setFilters({
      brand: newFilters.brand,
      rentalPrice: newFilters.rentalPrice || "",
      minMileage: newFilters.minMileage || "",
      maxMileage: newFilters.maxMileage || "",
    });
  };

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div>
      <CarFilters allCars={allCars} onApplyFilters={handleApplyFilters} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ListCar cars={cars} />
      {page < totalPages && !isLoading && (
        <button className={s.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
