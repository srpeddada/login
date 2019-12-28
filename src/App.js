import React from "react";
import "./App.css";
import Counter from "./component/Counter.js";
import Regi from "./component/Regi.js";
import Test from "./component/Test.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Test />
      </div>
    </Router>
  );
}

export default App;
