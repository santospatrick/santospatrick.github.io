import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./index.module.css";

function Widgets({ mounted, resetDelay, skills }) {
  return (
    <ul className={styles.list}>
      {skills.map((item, index) => (
        <CSSTransition in={mounted} timeout={0} classNames="fade" key={index}>
          <li
            className={`${styles.item} ${mounted ? styles.mounted : ""}`}
            style={{ transitionDelay: resetDelay ? "0s" : `${index * 0.1}s` }}
          >
            <item.icon className={styles.icon} />
            <span className={styles.title}>{item.title}</span>
            <div className={styles.background} />
          </li>
        </CSSTransition>
      ))}
    </ul>
  );
}

export default Widgets;
