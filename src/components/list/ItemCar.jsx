import React from "react";
import s from "./ListCar.module.css";
import { Link } from "react-router-dom";

const ItemCar = ({ car }) => {
  const city = car.address.split(",")[1]?.trim();
  const country = car.address.split(",")[2]?.trim();

  return (
    <li className={s.gridItem}>
      <img
        className={s.image}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
      />
      <div className={s.nameCar}>
        <p>
          {car.brand} <span className={s.model}>{car.model}</span>, {car.year}
        </p>
        <p>$ {car.rentalPrice}</p>
      </div>
      <div className={s.details}>
        {city} | {country} | {car.rentalCompany} | {car.type} |{" "}
        {car.mileage.toLocaleString("uk-UA")} km
      </div>
      <Link to={`/catalog/${car.id}`}>
        <button className={s.button}>Read more</button>
      </Link>
    </li>
  );
};

export default ItemCar;
