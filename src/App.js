import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import Info from "./components/Information/info";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="content">
        <Navbar />
        <Main />
        <Info />
      </div>
    </div>
  );
};

export default App;
