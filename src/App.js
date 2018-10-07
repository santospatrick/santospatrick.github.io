import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id="title" />
        <Routes />
      </div>
    );
  }
}

export default App;
