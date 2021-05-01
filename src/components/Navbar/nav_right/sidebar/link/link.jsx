import React from "react";
import s from "./link.module.css";

const Link = (props) => {
  return (
    <div>
      <div className={s.item}>
        <a href="/" className={s.link}>
          {props.message}
        </a>
      </div>
    </div>
  );
};

export default Link;
