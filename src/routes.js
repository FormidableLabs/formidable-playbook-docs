import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./views/home";
import Docs from "./views/docs";
import NotFound from "./views/not-found";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/docs/frontend" component={Docs} />
    <Route path="/docs/frontend/:slug" component={Docs} />
    <Route path="/docs/infrastructure" component={Docs} />
    <Route path="/docs/infrastructure/:slug" component={Docs} />
    <Route path="*" component={NotFound}/>
  </Route>
);
