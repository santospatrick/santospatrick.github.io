import React, { Component } from "react";

import Widgets from "../../components/Widgets";
import PageHOC from "../../hocs/Page";
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
      <Widgets
        mounted={this.state.mounted}
        resetDelay={this.state.resetDelay}
        skills={skills}
      />
    );
  }
}

export default PageHOC(Skills);
