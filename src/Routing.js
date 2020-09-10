import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/explore">Explore</Route>
          <Route path="/p/:postId">Post</Route>
          <Route path="/accounts/edit">Account</Route>
          <Route path="/:username">Username</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routing;
