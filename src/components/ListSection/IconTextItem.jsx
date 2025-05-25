import React from "react";

const IconTextItem = ({ icon, text }) => {
  return (
    <li>
      <svg width="16" height="16">
        <use href={`/icons.svg#${icon}`}></use>
      </svg>
      {text}
    </li>
  );
};

export default IconTextItem;
