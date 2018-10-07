import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const NavActiveLink = props => (
  <NavLink exact activeStyle={{ color: "green" }} {...props} />
);

const pages = [
  { to: "/", label: "skills" },
  { to: "/thoughts", label: "thoughts" },
  { to: "/work", label: "work" }
];

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          {pages.map((item, index) => (
            <li key={index}>
              <NavActiveLink to={item.to}>
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
