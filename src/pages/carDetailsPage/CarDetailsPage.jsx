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
import s from "./CarDetailsPage.module.css";
import ReservForm from "../../components/ReservForm/ReservForm";

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
    <div className={s.container}>
      <div className={s.leftContainer}>
        <img
          className={s.image}
          src={selectedCar.img}
          alt={`${selectedCar.brand} ${selectedCar.model}`}
        />
        <ReservForm />
      </div>

      <div className={s.descriptionContainer}>
        <h2 className={s.heading}>
          {selectedCar.brand} {selectedCar.model}, {selectedCar.year}
        </h2>
        <div className={s.common}>
          <p className={s.location}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-location"></use>
            </svg>
            {city}, {country}
          </p>
          <p>Mileage: {selectedCar.mileage.toLocaleString("uk-UA")} km </p>
        </div>

        <p className={s.price}>${selectedCar.rentalPrice}</p>
        <p>{selectedCar.description}</p>
        <div className={s.listSection}>
          <h3 className={s.listHeading}>Rental Conditions:</h3>
          <ul className={s.specsList}>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.rentalConditions[0]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.rentalConditions[1]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.rentalConditions[2]}
            </li>
          </ul>
        </div>

        <div className={s.listSection}>
          <h3 className={s.listHeading}>Car Specifications:</h3>
          <ul className={s.specsList}>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-calendar"></use>
              </svg>
              Year: {selectedCar.year}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-car"></use>
              </svg>
              Type: {selectedCar.type}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-fuel-pump"></use>
              </svg>
              Fuel Consumption: {selectedCar.fuelCosumption}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-gear"></use>
              </svg>
              Engine Size: {selectedCar.engineSize}
            </li>
          </ul>
        </div>

        <div className={s.listSection}>
          <h3 className={s.listHeading}>Accessories and functionalities:</h3>
          <ul className={s.specsList}>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.accessories[0]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.accessories[1]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.accessories[2]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.functionalities[0]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.functionalities[1]}
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-check-circle"></use>
              </svg>
              {selectedCar.functionalities[2]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
