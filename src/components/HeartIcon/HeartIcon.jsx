import React from "react";

const HeartIcon = ({ isFavorite }) => {
  return !isFavorite ? (
    <svg width="16" height="16">
      <use href="/icons.svg#icon-heart" />
    </svg>
  ) : (
    <svg width="16" height="16">
      <use href="/icons.svg#icon-favorite-heart" />
    </svg>
  );
};

export default HeartIcon;
