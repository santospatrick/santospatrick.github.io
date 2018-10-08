import React from "react";

import IconReact from "./svg/React.jsx";

import styles from "./index.module.css";

const skills = [
  {
    icon: IconReact,
    title: "React"
  }
];

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
