import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorSelectedCar,
  selectIsLoadingSelectedCar,
  selectSelectedCar,
} from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { fetchCarById } from "../../redux/operations";
import { clearSelectedCar } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedCar = useSelector(selectSelectedCar);
  const isLoadingSelectedCar = useSelector(selectIsLoadingSelectedCar);
  const errorSelectedCar = useSelector(selectErrorSelectedCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
    return () => {
      dispatch(clearSelectedCar());
    };
  }, [dispatch, id]);

  if (isLoadingSelectedCar) return <Loader />;
  if (errorSelectedCar) return <ErrorMessage error={errorSelectedCar} />;
  if (!selectedCar) return null;

  const city = selectedCar.address.split(",")[1]?.trim();
  const country = selectedCar.address.split(",")[2]?.trim();

  return (
    <div>
      <h1>
        {selectedCar.brand} {selectedCar.model}, {selectedCar.year}
      </h1>
      <p>
        {city}, {country}
      </p>
      <p>Mileage: {selectedCar.mileage.toLocaleString("uk-UA")} km</p>
      <p>${selectedCar.rentalPrice}</p>
    </div>
  );
};

export default CarDetailsPage;
