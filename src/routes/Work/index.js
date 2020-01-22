import React from "react";
import { FormattedMessage } from "react-intl";

import PageHOC from "../../hocs/Page";
import Card from "../../components/Card";
import styles from "./index.module.css";
import projects from "./projects";
import ScrollbarsContainer from "../Thoughts/ScrollbarsContainer";
import freelances from "./freelances";

const Work = () => (
  <ScrollbarsContainer>
    <h2 className={styles.title}>
      <FormattedMessage id="work.title.jobs" />
    </h2>
    <div className={styles.container}>
      {projects.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
    <h2 className={styles.title}>
      <FormattedMessage id="work.title.freelances" />
    </h2>
    <div className={styles.container}>
      {freelances.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
    <a
      className={styles.link}
      href="https://www.behance.net/santospatrick"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FormattedMessage id="work.title.design" />
    </a>
  </ScrollbarsContainer>
);

export default PageHOC(Work);
