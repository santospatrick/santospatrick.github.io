import React, { Component } from "react";

import Widgets from "../../components/Widgets";
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
      <div className="page">
        <Widgets
          mounted={this.state.mounted}
          resetDelay={this.state.resetDelay}
          skills={skills}
        />
      </div>
    );
  }
}

export default Skills;
