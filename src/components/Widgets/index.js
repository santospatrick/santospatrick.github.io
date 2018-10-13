import React from "react";

import styles from "./index.module.css";
import skills from "./skills";

function Widgets() {
  return (
    <ul>
      {skills.map((item, index) => (
        <li className={styles.widgetItem} key={index}>
          <item.icon className={styles.widgetIcon} />
        </li>
      ))}
    </ul>
  );
}

export default Widgets;
