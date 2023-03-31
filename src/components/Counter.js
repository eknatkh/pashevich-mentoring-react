import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "counter-cmp" },
      React.createElement("h4", null, "Counter Component"),
      React.createElement("p", null, "Value: " + this.state.count),
      React.createElement(
        "button",
        { onClick: this.increment, className: "counter-button" },
        "Increment"
      ),
      React.createElement(
        "button",
        { onClick: this.decrement, className: "counter-button" },
        "Decrement"
      )
    );
  }
}

export default Counter;
