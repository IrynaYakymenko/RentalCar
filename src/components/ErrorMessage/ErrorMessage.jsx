import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <div className={s.error}>Something went wrong! - {error}</div>;
};

export default ErrorMessage;
