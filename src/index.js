import React from "react";
import ReactDOM from "react-dom";

import IntlContext from "./components/IntlContext";

import App from "./App";
import "sanitize.css";
import "reset-css";
import "./index.css";

ReactDOM.render(
  <IntlContext>
    <App />
  </IntlContext>,
  document.getElementById("root")
);
