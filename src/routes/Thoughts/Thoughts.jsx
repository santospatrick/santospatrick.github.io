import React from "react";
import { FormattedHTMLMessage } from "react-intl";

import PageHOC from "../../hocs/Page";
import styles from "./index.module.css";
import ScrollbarsContainer from "./ScrollbarsContainer";

const Thoughts = () => (
  <ScrollbarsContainer className={styles.container}>
    <FormattedHTMLMessage id="thoughts.text" />
  </ScrollbarsContainer>
);

export default PageHOC(Thoughts);
