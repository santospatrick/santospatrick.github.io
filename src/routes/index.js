import React from "react";
import { Route } from "react-router-dom";

// Routes
import Skills from "./Skills";
import Thoughts from "./Thoughts";
import Work from "./Work";

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Skills} />
      <Route exact path="/thoughts" component={Thoughts} />
      <Route exact path="/work" component={Work} />
    </div>
  );
}

export default Routes;
