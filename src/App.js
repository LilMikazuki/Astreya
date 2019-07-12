import React from 'react';
import logo from './content/logo.svg';
import './css/main.css';

// My components#
import Header from './components/Header'
import Title from "./components/MainPage Title";
import WUOP from "./components/WUOP";
import Opportunities from "./components/Opportunities";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div className="MainPage">
        <Header/>
        <Title/>
        <WUOP/>
        <Opportunities/>
        <JoinUs/>
    </div>
  );
}

export default App;