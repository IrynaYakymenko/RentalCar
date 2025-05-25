import { useState } from "react";

import s from "./CarFilter.module.css";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";

const CarFilters = ({ allCars, onApplyFilters }) => {
  const initialFilters = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters(filters);

    setFilters(initialFilters);
  };
  return (
    <form onSubmit={handleSubmit} className={s.filterForm}>
      <BrandFilter
        value={filters.brand}
        onChange={(value) => handleChange("brand", value)}
      />

      <PriceFilter
        value={filters.rentalPrice}
        onChange={(value) => handleChange("rentalPrice", value)}
        allCars={allCars}
      />

      <MileageFilter
        minMileage={filters.minMileage}
        maxMileage={filters.maxMileage}
        onChange={(name, value) => handleChange(name, value)}
      />

      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default CarFilters;
