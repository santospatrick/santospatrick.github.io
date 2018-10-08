import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Container from "./components/Container";
import Header from "./components/Header";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Profile />
          <div style={{ position: "relative" }}>
            <Header />
            <Routes />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
