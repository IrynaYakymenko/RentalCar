import React, { useEffect, useState } from "react";
import s from "./CarFilter.module.css";

const PriceFilter = ({ value, onChange, allCars }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (allCars && allCars.length > 0) {
      const uniquePrices = Array.from(
        new Set(
          allCars
            .map((car) => Number(car.rentalPrice))
            .filter((price) => !isNaN(price))
        )
      ).sort((a, b) => a - b);
      setPrices(uniquePrices);
    } else {
      setPrices([]);
    }
  }, [allCars]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={s.selectWrapper}>
      <label className={s.label}>Price/ 1 hour</label>
      <div className={s.selectHeader} onClick={toggleOpen}>
        {value ? `To $${value}` : "Choose a price"}
        <svg width="16" height="16" className={`${isOpen ? s.arrowOpen : ""}`}>
          <use href={"/icons.svg#icon-property"}></use>
        </svg>
      </div>

      {isOpen && (
        <ul className={s.optionsList}>
          <li
            className={!value ? s.optionItemSelected : s.optionItem}
            onClick={() => handleSelect("")}
          ></li>
          {prices.map((price) => (
            <li
              key={price}
              className={value === price ? s.optionItemSelected : s.optionItem}
              onClick={() => handleSelect(price)}
            >
              {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PriceFilter;
