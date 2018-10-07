import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";

class App extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id="title" />
      </div>
    );
  }
}

export default App;
