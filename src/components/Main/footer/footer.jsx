import React from "react";
import s from "./footer.module.css";
import { VscSmiley } from "react-icons/vsc";
import img1 from "../../../assets/images/main/messagebtn1.png";
import img2 from "../../../assets/images/main/messagebtn2.png";

const Footer = () => {
  return (
    <div className={s.border}>
      <div className={s.chat}>
        <div className={s.left}>
          <img className={s.img} src={img1} alt="" />
          <img className={s.img} src={img2} alt="" />
          <textarea
            className={s.textarea}
            name=""
            placeholder="Message in #general"
          ></textarea>
        </div>
        <VscSmiley className={s.VscSmiley} />
      </div>
    </div>
  );
};

export default Footer;
