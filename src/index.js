import React from "react";
import ReactDOM from "react-dom";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";

import App from "./App";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import messages from "./messages";
import { flattenMessages } from "./utils";

addLocaleData([...en, ...pt]);

let locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "pt-BR";

const checkLanguage = language => {
  if (language === "en-US") return "en";
  return language;
};

ReactDOM.render(
  <IntlProvider
    locale={locale}
    messages={flattenMessages(messages[checkLanguage(locale)])}
  >
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
