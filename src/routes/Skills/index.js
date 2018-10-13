import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import PageHOC from "../../hocs/Page";
import Widgets from "../../components/Widgets";
import EmailButton from "../../components/EmailButton";

import styles from "./index.module.css";
import skills from "./skills";

class Skills extends Component {
  state = {
    mounted: false,
    resetDelay: false
  };

  componentDidMount() {
    this.setState({ mounted: true });

    setTimeout(() => {
      this.setState({ resetDelay: true });
    }, skills.length * 10);
  }

  render() {
    return (
      <div className={styles.container}>
        <Widgets
          mounted={this.state.mounted}
          resetDelay={this.state.resetDelay}
          skills={skills}
        />
        <EmailButton href="mailto:patrickspteixeira@gmail.com?subject=Site | Vamos trabalhar juntos!&body=Descobri você pelo seu site!%0D%0A%0D%0A Gostaria de solicitar um orçamento para:%0D%0A">
          <FormattedMessage id="skills.emailButton" />
        </EmailButton>
      </div>
    );
  }
}

export default PageHOC(Skills);
