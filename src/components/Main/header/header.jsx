import React from "react";
import s from "./header.module.css";
import { BsSearch } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import img1 from "../../../assets/images/main/star.png";
import img2 from "../../../assets/images/main/people.svg";
import img3 from "../../../assets/images/main/Icon.png";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <h3 className={s.title}>#general</h3>
        <img src={img1} alt="" />
      </div>
      <div className={s.right}>
        <div className={s.number}>
          <img src={img2} alt="" />
          <p className={s.people}>1,093</p>
        </div>
        <div className={s.block}>
          <input className={s.text} type="text" placeholder="Search..." />
          <a href="/" className={s.link}>
            <BsSearch className={s.BsSearch} />
          </a>
        </div>
        <div className={s.icon}>
          <FiBell className={s.FiBell} />
        </div>
        <div className={s.icon2}>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
