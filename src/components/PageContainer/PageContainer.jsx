import React from "react";
import styles from "./index.module.css";

function PageContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default PageContainer;
