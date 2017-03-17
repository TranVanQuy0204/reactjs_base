import React from "react";

export default class Help extends React.Component {
  constructor() {
    super();
    this.state = {name: "Help"}
  }
  render() {
    console.log("settings");
    return (
      <div class="bs-docs-section">
        <div class="page-header">
          <div class="row">
            <div class="col-lg-12">
              <h1 id="buttons">{this.state.name}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
