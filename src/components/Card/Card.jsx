import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import Emoji from "react-emoji-render";

import styles from "./index.module.css";

const capitalize = word => `${word.charAt(0).toUpperCase()}${word.substr(1)}`;
const getHref = href => (href ? { href, target: "_blank" } : {});

const Card = ({ href, locked, name, date, techs, summary, until }) => (
  <a {...getHref(href)} className={styles.container}>
    <h3 className={styles.title}>
      {name} {!getHref(href).href && <Emoji text=":skull:" />}{" "}
      {locked && <Emoji text=":lock:" />}
    </h3>
    {date ? (
      <FormattedDate value={date} month="long" year="numeric">
        {value => (
          <span className={styles.subtitle}>
            {capitalize(value)}
            {until ? (
              until === "now" ? (
                " - Atual"
              ) : (
                <FormattedDate month="long" year="numeric" value={until}>
                  {value => ` - ${capitalize(value)}`}
                </FormattedDate>
              )
            ) : null}
          </span>
        )}
      </FormattedDate>
    ) : (
      <FormattedMessage id="work.currentyWorking">
        {value => (
          <span className={styles.subtitle}>
            {value}
            <Emoji text=":construction_worker:" />
          </span>
        )}
      </FormattedMessage>
    )}
    {summary.map(text => (
      <p className={styles.summary}>{text}</p>
    ))}
    <ul className={styles.list}>
      {techs.map((item, index) => (
        <li className={styles.item} key={index}>
          <i>{item}</i>
        </li>
      ))}
    </ul>
  </a>
);

export default Card;
