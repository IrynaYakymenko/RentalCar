import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import ListCar from "../../components/List/ListCar";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import s from "./CatalogPage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1 }));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ListCar cars={cars} />
      {page < totalPages && (
        <button className={s.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
