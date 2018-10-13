import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./index.module.css";
import skills from "./skills";

function Widgets({ mounted }) {
  return (
    <ul className={styles.list}>
      {skills.map((item, index) => (
        <CSSTransition in={mounted} timeout={0} classNames="fade" key={index}>
          <li
            className={`${styles.item} ${mounted ? styles.mounted : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <item.icon className={styles.widgetIcon} />
          </li>
        </CSSTransition>
      ))}
    </ul>
  );
}

export default Widgets;
