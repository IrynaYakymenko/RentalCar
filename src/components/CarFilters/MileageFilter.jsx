import React from "react";
import s from "./CarFilter.module.css";

const MileageFilter = ({ minMileage, maxMileage, onChange }) => {
  const handleMinChange = (e) => {
    const value = e.target.value;
    onChange("minMileage", value);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    onChange("maxMileage", value);
  };
  return (
    <div className={s.wrapperMileage}>
      <label className={s.label}>Car mileage / km</label>
      <div className={s.inputs}>
        <input
          className={s.selectHeader}
          placeholder="From"
          value={minMileage}
          onChange={handleMinChange}
        />
        <input
          className={s.selectHeader}
          placeholder="To"
          value={maxMileage}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default MileageFilter;
