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
import ListSection from "../../components/ListSection/ListSection";

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

  const rentalConditions = selectedCar.rentalConditions.map((cond) => ({
    icon: "icon-check-circle",
    text: cond,
  }));

  const accessoriesAndFuncs = [
    ...selectedCar.accessories,
    ...selectedCar.functionalities,
  ].map((item) => ({
    icon: "icon-check-circle",
    text: item,
  }));

  const carSpecifications = [
    { icon: "icon-calendar", text: `Year: ${selectedCar.year}` },
    { icon: "icon-car", text: `Type: ${selectedCar.type}` },
    {
      icon: "icon-fuel-pump",
      text: `Fuel Consumption: ${selectedCar.fuelCosumption}`,
    },
    { icon: "icon-gear", text: `Engine Size: ${selectedCar.engineSize}` },
  ];

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

        <ListSection title="Rental Conditions:" items={rentalConditions} />
        <ListSection title="Car Specifications:" items={carSpecifications} />
        <ListSection
          title="Accessories and functionalities:"
          items={accessoriesAndFuncs}
        />
      </div>
    </div>
  );
};

export default CarDetailsPage;
