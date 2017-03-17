import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Admin Web App"}
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}
