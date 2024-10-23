import React from "react";
import Logo from "../header/Logo";
import Category from "../header/Category";

const Header = () => {
  return (
    <header id="header" role="banner">
      <Logo />
      <Category />
    </header>
  );
};

export default Header;
