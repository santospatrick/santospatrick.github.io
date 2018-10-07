import React from "react";
import { Route } from "react-router-dom";

// Routes
import Skills from "./Skills";
import Thoughts from "./Thoughts";

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Skills} />
      <Route exact path="/thoughts" component={Thoughts} />
    </div>
  );
}

export default Routes;
