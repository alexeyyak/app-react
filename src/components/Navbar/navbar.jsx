import React from "react";
import s from "./navbar.module.css";
import Nav_left from "./nav_left/nav_left";
import Nav_right from "./nav_right/nav_right";

const Navbar = () => {
  return (
    <div className={s.navigation}>
      <Nav_left />
      <Nav_right />
    </div>
  );
};

export default Navbar;
