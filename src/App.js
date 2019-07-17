import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/main.css";

// My components#
import MainPage from "./components/Main page/MainPage";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className={"App"}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
