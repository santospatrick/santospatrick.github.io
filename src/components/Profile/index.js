import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import styles from "./index.module.css";
import ProfileImage from "./profile.png";
import Rotating from "./svg/Rotating.jsx";
import SocialMedia from "../SocialMedia";

class Profile extends Component {
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
        <div>
          <FormattedMessage id="title">
            {text => <h1 className={styles.profileTitle}>{text}</h1>}
          </FormattedMessage>
          <FormattedMessage id="subtitle">
            {text => <h1 className={styles.profileSubtitle}>{text}</h1>}
          </FormattedMessage>
          <SocialMedia />
        </div>
      </div>
    );
  }
}

export default Profile;
