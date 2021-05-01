import React from "react";
import s from "./nav_left.module.css";
import img1 from "../../../assets/images/nav1/1.png";
import img2 from "../../../assets/images/nav1/2.png";
import img3 from "../../../assets/images/nav1/3.png";
import img4 from "../../../assets/images/nav1/4.png";
import img5 from "../../../assets/images/nav1/5.png";
import img6 from "../../../assets/images/nav1/6.png";
import img7 from "../../../assets/images/nav1/7.png";
import img8 from "../../../assets/images/nav1/Dots.png";

const Nav_left = () => {
  return (
    <div className={s.nav_left}>
      <div className={s.dots}>
        <img src={img8} alt="" />
      </div>
      <div className={s.block}>
        <a href="/" className={s.link}>
          <img className={s.img} src={img1} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img2} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img3} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img4} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img5} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img6} alt="" />
        </a>
        <a href="/" className={s.link}>
          <img className={s.img} src={img7} alt="" />
        </a>
        <div className={s.block_btn}>
          <a href="#" className={s.btn}></a>
        </div>
      </div>
    </div>
  );
};

export default Nav_left;
