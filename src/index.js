import React from "react";
import ReactDOM from "react-dom";

import IntlContext from "./components/IntlContext";

import App from "./App";
import "sanitize.css";
import "reset-css";
import "./index.css";

import { consoleLogInspect } from "./utils";

consoleLogInspect();

ReactDOM.render(
  <IntlContext>
    <App />
  </IntlContext>,
  document.getElementById("root")
);
