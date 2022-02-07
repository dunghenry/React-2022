import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageRenders from "./PageRenders";
import Header from './components/header/index';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" component={PageRenders} exact />
        <Route path="/:page" component={PageRenders} exact />
        <Route path="/:page/:id" component={PageRenders} exact />
      </Switch>
    </Router>
  )
};

export default App;
