import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";
import PageHOC from "../../hocs/Page";

import styles from "./index.module.css";

class Thoughts extends Component {
  render() {
    return (
      <div className={styles.container}>
        <FormattedHTMLMessage id="thoughts.text" />
      </div>
    );
  }
}

export default PageHOC(Thoughts);
