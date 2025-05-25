import React, { useState } from "react";
import ItemCar from "./ItemCar";
import s from "./ListCar.module.css";

const ListCar = ({ cars }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };
  return (
    <div className={s.container}>
      <ul className={s.grid}>
        {cars.map((car) => (
          <ItemCar
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCar;
