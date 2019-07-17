import React from "react";
import Header from "../Header/Header";
import Title from "./MainPageTitle/MainPageTitle";
import WUOP from "./WUOP/WUOP";
import Opportunities from "./Opportunities/Opportunities";
import JoinUs from "./JoinUs/JoinUs";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Header />
        <Title />
        <WUOP />
        <Opportunities />
        <JoinUs />
      </div>
    );
  }
}
