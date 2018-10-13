import React from "react";
import styles from "./index.module.css";

function EmailButton({ children, ...rest }) {
  return (
    <a className={styles.button} {...rest}>
      {children}
    </a>
  );
}

export default EmailButton;
