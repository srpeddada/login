import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import Test from "./component/Test.js";

ReactDOM.render(<Test />, document.getElementById("one"));
serviceWorker.unregister();
