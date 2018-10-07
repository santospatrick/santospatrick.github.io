import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Skills from "./Skills";
import Thoughts from "./Thoughts";
import Work from "./Work";
import PageNotFound from "./PageNotFound";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Skills} />
        <Route exact path="/thoughts" component={Thoughts} />
        <Route exact path="/work" component={Work} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
