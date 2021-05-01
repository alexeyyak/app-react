import React from "react";
import s from "./friend.module.css";
import classNames from "classnames";
import img1 from "../../../../../assets/images/nav2/people1.png";
import img2 from "../../../../../assets/images/nav2/people2.png";
import img3 from "../../../../../assets/images/nav2/people3.png";
import img4 from "../../../../../assets/images/nav2/people4.png";
import img5 from "../../../../../assets/images/nav2/people5.png";
import img6 from "../../../../../assets/images/nav2/people6.png";

const Friend = (props) => {
  return (
    <div>
      <div className={classNames(s.item, s.active)}>
        <img className={s.img} src={img1} alt="" />
        <h5 className={s.title}>Orlando Diggs</h5>
      </div>
      <div className={classNames(s.item, s.active)}>
        <img className={s.img} src={img2} alt="" />
        <h5 className={s.title}>Carmen Velasco</h5>
      </div>
      <div className={s.item}>
        <img className={s.img} src={img3} alt="" />
        <h5 className={s.title}>Marie Jensen</h5>
      </div>
      <div className={s.item}>
        <img className={s.img} src={img4} alt="" />
        <h5 className={s.title}>Alex Lee</h5>
      </div>
      <div className={s.item}>
        <img className={s.img} src={img5} alt="" />
        <h5 className={s.title}>Leo Gill</h5>
      </div>
      <div className={s.item}>
        <img className={s.img} src={img6} alt="" />
        <h5 className={s.title}>Britney Cooper</h5>
      </div>
    </div>
  );
};

export default Friend;
