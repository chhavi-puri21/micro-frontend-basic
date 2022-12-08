import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";
import { Header } from "host/Header";

import "./index.css";

const App = () => (
  <div className="container">
    {/* <Header /> */}
    <div>Remote, responsible for counter</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
