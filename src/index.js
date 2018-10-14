import React from "react";
import ReactDOM from "react-dom";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";

import App from "./App";
import "sanitize.css";
import "reset-css";
import "./index.css";

import messages from "./messages";
import { flattenMessages } from "./utils";

addLocaleData([...en, ...pt]);

const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "pt-BR";

const checkLanguage = language => {
  if (language.includes("en-") || language === "en") return "en";
  return "pt-BR";
};

const navigatorLanguage = checkLanguage(locale);

ReactDOM.render(
  <IntlProvider
    locale={locale}
    messages={flattenMessages(messages[navigatorLanguage])}
  >
    <App navigatorLanguage={navigatorLanguage} />
  </IntlProvider>,
  document.getElementById("root")
);
