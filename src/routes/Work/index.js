import React, { Component } from "react";
import PageHOC from "../../hocs/Page";

class Work extends Component {
  render() {
    return <div className="page">Trabalhos</div>;
  }
}

export default PageHOC(Work);
