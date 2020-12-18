import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ScrollToTop, AppBar } from "components";
import * as pages from "./pages";

function App() {
  return (
    <div id="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={pages.Home} />
          <Route exact path="/welcome" component={pages.Welcome} />
          <Route exact path="/education" component={pages.Education} />
          <Route exact path="/experience" component={pages.Experience} />
          <Route exact path="/profile" component={pages.Profile} />
          <Route exact path="/projects" component={pages.Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
