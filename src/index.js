import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes.js';
import NavBar from './pages/components/navBar.js';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";



var hist = createBrowserHistory();

ReactDOM.render(
  <>
    <Router history={hist}>
      <NavBar />
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
      <Footer />
    </Router>
  </>,
  document.getElementById("root")
);

