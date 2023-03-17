import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

   increment() {
      this.setState({
        count: this.state.count + 1
      })
   }

   decrement() {
    this.setState({
      count: this.state.count - 1
    })
 }

    render() {
        return (
            React.createElement('div', {class: "counter-cmp"},
                React.createElement('h4', null, 'Counter Component'),
                React.createElement('p', null, this.state.count),
                React.createElement('button', {onClick: this.increment, class: "my-button"}, 'Increment'),
                React.createElement('button', {onClick: this.decrement, class: "my-button"}, 'Decrement'))
        )
    }
}

export default Counter;
 