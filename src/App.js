import React, { Component } from "react";
import "./App.css";
import Confetti from "./confetty";

export class App extends Component {
  state = {
    amount: 0,
    isConfetti: false,
    mileStone: 10,
    total: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      isConfetti: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      current => ({
        total: current.total + Number(current.amount),
        amount: 0
      }),
      () => {
        if (this.state.total >= this.state.mileStone) {
          this.throwConfety();
        }
      }
    );
  };

  throwConfety = () => {
    let nextMileStone = (Math.floor(this.state.total / 10) + 1) * 10;

    this.setState({
      isConfetti: true,
      mileStone: nextMileStone
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isConfetti && <Confetti />}
        <header className="App-header">
          <p>Add numbers to increase total to see confetti</p>
          <p>Total {this.state.total}</p>
          <form className="white" onSubmit={this.handleSubmit}>
            <input
              type="number"
              id="amount"
              onChange={this.handleChange}
              value={this.state.amount}
            />
            <button type="submit">add</button>
          </form>
          <p>Next mileStone {this.state.mileStone}</p>
        </header>
      </div>
    );
  }
}

export default App;
