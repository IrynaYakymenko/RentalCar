import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/operations";
import { selectBrands } from "../../redux/selectors";
import s from "./CarFilter.module.css";

const BrandFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const brands = useSelector(selectBrands);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={s.selectWrapper}>
      <label className={s.label}>Car brand</label>
      <div className={s.selectHeader} onClick={toggleOpen}>
        {value || "Choose a brand"}
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
          {brands.map((brand) => (
            <li
              key={brand}
              className={value === brand ? s.optionItemSelected : s.optionItem}
              onClick={() => handleSelect(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrandFilter;
