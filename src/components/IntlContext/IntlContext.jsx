import React, { Component } from "react";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";

import messages from "./messages";
import { flattenMessages } from "../../utils";

addLocaleData([...en, ...pt]);

const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "pt-BR";

const getNavigatorLanguage = language => {
  if (language.includes("en-") || language === "en") return "en";
  return "pt-BR";
};

const language = getNavigatorLanguage(locale);

class IntlContext extends Component {
  state = {
    language
  };
  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        messages={flattenMessages(messages[language])}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default IntlContext;
