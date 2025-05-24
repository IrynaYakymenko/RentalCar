import React from "react";
import s from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isExactHome = location.pathname === "/";
  const isExactCatalog = location.pathname === "/catalog";
  return (
    <header className={s.common}>
      <nav className={s.nav}>
        <NavLink to="/">
          <svg width="104" height="16">
            <use href="/icons.svg#icon-Logo"></use>
          </svg>
        </NavLink>
        <ul className={s.list}>
          <li>
            <NavLink className={isExactHome ? s.active : s.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isExactCatalog ? s.active : s.link}
              to="catalog"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
