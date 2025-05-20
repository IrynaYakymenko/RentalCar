import React from "react";
import Header from "../../components/header/header";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={s.main}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={s.button} type="submit">
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
