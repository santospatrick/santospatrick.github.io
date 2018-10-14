import React from "react";
import { injectIntl } from "react-intl";
import styles from "./index.module.css";

import { Brazil, UnitedStates } from "./svg";

const getFlag = locale => {
  switch (locale) {
    case "pt-BR":
      return <Brazil />;

    case "en":
      return <UnitedStates />;

    default:
      return <div>Loading...</div>;
  }
};

function SelectLanguage(props) {
  return (
    <div className={styles.container}>
      <span className={styles.flag}>{getFlag(props.value)}</span>
      <select className={styles.input} {...props}>
        <option value="pt-BR">
          {props.intl.formatMessage({ id: "profile.languagues.portuguese" })}
        </option>
        <option value="en">
          {props.intl.formatMessage({ id: "profile.languagues.english" })}
        </option>
      </select>
    </div>
  );
}

export default injectIntl(SelectLanguage);
