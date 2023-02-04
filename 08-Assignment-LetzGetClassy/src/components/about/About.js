import React, { Component } from "react";
import ChildClass1 from "./ChildClass1";
import ChildClass2 from "./ChildClass2";

export class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentWillUnmount() {
    console.log("Parent ComponentWillUnmount");
  }

  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>About Class</h1>
        <ChildClass1 name="1st Child Dummy Component" />
        <ChildClass2 name="2nd Child Counter Component" />
      </>
    );
  }
}

export default About;
