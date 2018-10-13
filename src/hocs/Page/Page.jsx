import React from "react";
import styles from "./index.module.css";

const Page = WrapperComponent => props => (
  <div className={styles.container}>
    <WrapperComponent {...props} />
  </div>
);

export default Page;
