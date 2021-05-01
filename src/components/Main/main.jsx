import React from "react";
import s from "./main.module.css";
import Header from "./header/header";
import Chat from "./chat/chat";
import Footer from "./footer/footer";

const Main = () => {
  return (
    <div className={s.main}>
      <Header />
      <Chat />
      <Footer />
    </div>
  );
};

export default Main;
