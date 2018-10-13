import React, { Component } from "react";

import Widgets from "../../components/Widgets";

class Skills extends Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <div className="page">
        <Widgets mounted={this.state.mounted} />
      </div>
    );
  }
}

export default Skills;
