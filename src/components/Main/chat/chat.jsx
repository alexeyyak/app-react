import React from "react";
import s from "./chat.module.css";
import Content from "./content/content";

const Chat = () => {
  return (
    <div className={s.overflow}>
      <div className={s.chat}>
        <Content />
      </div>
    </div>
  );
};

export default Chat;
