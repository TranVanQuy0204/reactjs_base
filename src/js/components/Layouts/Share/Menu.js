import React from 'react'
import { IndexLink, Link } from "react-router";

export default class Menu extends React.Component{
  render(){
    return(
      <section>
            <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <Link to="/" class="navbar-brand">Kenzj</Link>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="help">Help</Link>
            </li>
            <li>
              <Link to="blog/search">Search</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
      </section>
    );
  }
}
