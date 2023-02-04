import React, { Component } from "react";

export class ChildClass2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manualCounter: 0,
      autoCounter: 0,
    };
    console.log("ChildClass 2 - Constructor");
  }

  componentDidMount() {
    console.log("ChildClass 2 - ComponentDidMount");
    this.timer = setInterval(() => {
      console.log("setInterval");
      this.setState({ autoCounter: ++this.state.autoCounter });
    }, [1000]);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ChildClass 2 - ComponentWillUnmount");
  }

  componentDidUpdate() {
    console.log("ChildClass 2 - ComponentDidUpdate");
  }

  render() {
    console.log("ChildClass 2 - Render");
    return (
      <div style={{ margin: "16px" }}>
        <h2>{this.props.name}</h2>
        <div>Manual Counter: {this.state.manualCounter}</div>
        <div>Auto Counter: {this.state.autoCounter}</div>
        <button
          onClick={() =>
            this.setState({ manualCounter: ++this.state.manualCounter })
          }
        >
          Increment Counter
        </button>
      </div>
    );
  }
}

export default ChildClass2;
