import React from "react";
import { FormattedHTMLMessage } from "react-intl";
import MediaQuery from "react-responsive";

import PageHOC from "../../hocs/Page";
import styles from "./index.module.css";
import ScrollbarsContainer from "./ScrollbarsContainer";

const Thoughts = () => (
  <>
    <MediaQuery query="(min-width: 961px)">
      <ScrollbarsContainer className={styles.container}>
        <FormattedHTMLMessage id="thoughts.text" />
      </ScrollbarsContainer>
    </MediaQuery>
    <MediaQuery query="(max-width: 960px)">
      <div className={styles.container}>
        <FormattedHTMLMessage id="thoughts.text" />
      </div>
    </MediaQuery>
  </>
);

export default PageHOC(Thoughts);
