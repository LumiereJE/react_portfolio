import React from "react";
import { headerNav } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  console.log(location);

  return (
    <nav className="header__nav">
      <ul>
        {headerNav.slice([1]).map((nav, key) => (
          <li
            key={key}
            className={location.pathname === nav.src ? "active" : ""}
          >
            <Link to={nav.src}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;
