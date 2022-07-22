import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    //if (this.state.count < 10) {
    this.setState({
      count: Math.min(10, this.state.count + 1),
      body: (document.body.style.backgroundColor = "pink")
    });
    //}
  };

  remove = () => {
    //if (this.state.count > 0) {
    this.setState({
      count: Math.max(0, this.state.count - 1),
      body: (document.body.style.backgroundColor = "yellow")
    });
    //}
  };

  render() {
    return (
      <div>
        <h1>CONTADOR</h1>
        <p>{this.state.count}</p>
        <button className="decrementButton" onClick={this.remove}>
          -
        </button>
        <button className="incrementButton" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default App;
