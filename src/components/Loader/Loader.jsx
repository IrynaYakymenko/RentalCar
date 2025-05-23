import React from "react";
import { RiseLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.overlay}>
      <RiseLoader />
    </div>
  );
};

export default Loader;
