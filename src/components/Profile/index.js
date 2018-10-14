import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { LanguageContext } from "../IntlContext";

import styles from "./index.module.css";
import ProfileImage from "./profile.png";
import SelectLanguage from "../SelectLanguage";
import Rotating from "./svg/Rotating.jsx";
import SocialMedia from "../SocialMedia";

class Profile extends Component {
  state = {
    value: "pt-BR"
  };
  render() {
    return (
      <div className={styles.profileWrapper}>
        <div className={styles.profileContainer}>
          <img
            className={styles.profileImage}
            src={ProfileImage}
            alt="Patrick`s Profile"
          />
          <div className={styles.profileGradient}>
            <Rotating className={styles.profileRotating} />
          </div>
        </div>
        <LanguageContext.Consumer>
          {context => (
            <div>
              <SelectLanguage
                value={context.state.language}
                onChange={event => context.changeLanguage(event.target.value)}
              />

              <FormattedMessage id="title">
                {text => <h1 className={styles.profileTitle}>{text}</h1>}
              </FormattedMessage>
              <FormattedMessage id="subtitle">
                {text => <h1 className={styles.profileSubtitle}>{text}</h1>}
              </FormattedMessage>
              <SocialMedia />
            </div>
          )}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Profile;
