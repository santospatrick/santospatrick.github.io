import React from "react";
import { FormattedHTMLMessage } from "react-intl";

import PageHOC from "../../hocs/Page";
import styles from "./index.module.css";

const Setup = () => (
  <div className={styles.container}>
    <FormattedHTMLMessage id="setup.list" />
  </div>
);

export default PageHOC(Setup);
