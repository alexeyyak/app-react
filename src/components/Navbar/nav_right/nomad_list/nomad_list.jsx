import React from "react";
import s from "./nomad_list.module.css";
import settings from "../../../../assets/images/nav2/settings.png";
import mark from "../../../../assets/images/nav2/mark.svg";
import messege from "../../../../assets/images/nav2/messege.svg";

const Nomad_list = () => {
  return (
    <div>
      <div className={s.nomad_list}>
        <div className={s.block}>
          <div className={s.title}>Nomad List</div>
          <img className={s.mark} src={mark} alt="" />
          <ul className={s.drop}>
            <li className={s.item}>
              <a className={s.link} href="/">
                general
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="/">
                general
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="/">
                general
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="/">
                general
              </a>
            </li>
          </ul>
        </div>
        <a className={s.settings} href="/">
          <img src={settings} alt="" />
        </a>
      </div>
      <div className={s.treades}>
        <img src={messege} alt="" />
        <div className={s.trd_title}>All treads</div>
      </div>
    </div>
  );
};

export default Nomad_list;
