import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Counter from "./component/Counter.js";
import Regi from "./component/Regi.js";
import Test from "./component/Test.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import { Router, Route } from "react-router";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Regi />, document.getElementById("regi"));
//ReactDOM.render(<Test />, document.getElementById("one"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
