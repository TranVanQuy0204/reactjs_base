import React from 'react'

export default class Footer extends React.Component{
  constructor() {
    super();
    this.state = {name: "Footer"}
  }
  render(){
    return(
      <section>{this.state.name}</section>
    );
  }
}
