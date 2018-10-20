import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";
import "./index.css";

const NavActiveLink = props => (
  <NavLink activeClassName="header-link-active" exact {...props} />
);

const pages = [
  { to: "/", label: "skills" },
  { to: "/thoughts", label: "thoughts" },
  { to: "/work", label: "work" },
  { to: "/setup", label: "setup" }
];

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.headerList}>
          {pages.map((item, index) => (
            <li className={styles.headerItem} key={index}>
              <NavActiveLink className={styles.headerLink} to={item.to}>
                <FormattedMessage id={`header.${item.label}`} />
              </NavActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Header;
