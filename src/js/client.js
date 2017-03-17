import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./components/Layouts/App";
import Help from "./components/Layouts/Help";
import Home from "./components/Layouts/Home";
import Blog from "./components/Layouts/Blog";

import BlogSearch from "./components/Blog/Search";
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="help" name="help" component={Help}></Route>
      <Route path="blog" name="blog" component={Blog}></Route>
      <Route path="blog" component={App}>
        <Route path="search" name="search" component={BlogSearch}></Route>
      </Route>
    </Route>
  </Router>,
app);
