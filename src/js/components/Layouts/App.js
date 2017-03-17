import React from "react";
import { Link } from "react-router";

import Menu from "./Share/Menu";
import Footer from "./Share/Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Web App"}
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
