import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Result from "./components/Result";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home} />

          <Route exact path = "/result" component = {Result} />
        </Switch>
      </Router>
    </div>
  );
}
