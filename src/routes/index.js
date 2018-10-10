import React from "react";
import { Route, Switch } from "react-router-dom";

// Transitions
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Routes
import Skills from "./Skills";
import Thoughts from "./Thoughts";
import Work from "./Work";
import PageNotFound from "./PageNotFound";

function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Skills} />
              <Route exact path="/thoughts" component={Thoughts} />
              <Route exact path="/work" component={Work} />
              <Route component={PageNotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default Routes;
