import React, { Component } from "react";
import PageHOC from "../../hocs/Page";

class Thoughts extends Component {
  render() {
    return <h1>Considerações</h1>;
  }
}

export default PageHOC(Thoughts);
