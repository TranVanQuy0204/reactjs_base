import React from "react";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {name: "Blog Search"}
  }

  render() {
    return (
      <div class="bs-docs-section">
        <div class="page-header">
          <div class="row">
            <div class="col-lg-12">
              <h1 id="buttons">{this.state.name}</h1>
              <p>{this.props.params}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
