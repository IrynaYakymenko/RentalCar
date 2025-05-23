import React from "react";

import s from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className={s.main}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>

        <NavLink className={s.button} to="catalog">
          View Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
