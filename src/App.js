import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Routes from "./routes";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id="title" />
        <Router>
          <div>
            <Header />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
