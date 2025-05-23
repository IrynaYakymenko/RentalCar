import React from "react";
import ItemCar from "./ItemCar";
import s from "./ListCar.module.css";

const ListCar = ({ cars }) => {
  return (
    <div className={s.container}>
      <ul className={s.grid}>
        {cars.map((car) => (
          <ItemCar key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default ListCar;
