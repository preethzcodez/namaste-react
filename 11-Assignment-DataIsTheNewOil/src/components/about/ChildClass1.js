import React, { Component } from "react";

export class ChildClass1 extends Component {
  constructor(props) {
    super(props);
    console.log("ChildClass 1 - Constructor");
  }

  componentDidMount() {
    console.log("ChildClass 1 - ComponentDidMount");
  }

  componentWillUnmount() {
    console.log("ChildClass 1 - ComponentWillUnmount");
  }

  componentDidUpdate() {
    console.log("ChildClass 1 - ComponentDidUpdate");
  }

  render() {
    console.log("ChildClass 1 - Render");
    return <h2>{this.props.name}</h2>;
  }
}

export default ChildClass1;
