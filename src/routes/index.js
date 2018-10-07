import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Routes
import Skills from "./Skills";
import Thoughts from "./Thoughts";

function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Skills} />
        <Route path="/thoughts" component={Thoughts} />
      </div>
    </Router>
  );
}

export default Routes;
