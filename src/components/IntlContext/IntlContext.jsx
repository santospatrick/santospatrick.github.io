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

export const LanguageContext = React.createContext();

class IntlContext extends Component {
  state = {
    language
  };
  changeLanguage = language => this.setState({ language });
  render() {
    const { language } = this.state;
    return (
      <LanguageContext.Provider
        value={{ state: this.state, changeLanguage: this.changeLanguage }}
      >
        <IntlProvider
          locale={language}
          messages={flattenMessages(messages[language])}
        >
          {this.props.children}
        </IntlProvider>
      </LanguageContext.Provider>
    );
  }
}

export default IntlContext;
