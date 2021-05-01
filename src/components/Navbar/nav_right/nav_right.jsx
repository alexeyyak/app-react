import React from "react";
import s from "./nav_right.module.css";
import Nomad_list from "./nomad_list/nomad_list";
import Sidebar from "./sidebar/sidebar";

const Nav_right = () => {
  return (
    <div className={s.nav_right}>
      <div className={s.wrapper}>
        <Nomad_list />
        <Sidebar />
      </div>
    </div>
  );
};

export default Nav_right;
