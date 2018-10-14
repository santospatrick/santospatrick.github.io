import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Container from "./components/Container";
import Header from "./components/Header";
import Profile from "./components/Profile";
import PageContainer from "./components/PageContainer";

const App = () => (
  <Router>
    <Container>
      <Profile />
      <PageContainer>
        <Header />
        <Routes />
      </PageContainer>
    </Container>
  </Router>
);

export default App;
