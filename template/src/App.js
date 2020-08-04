import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import logo from "../logo/logo.svg";
import border from "../logo/border.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleCount(input) {
    this.setState(prevState => ({ count: prevState.count + input }));
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="black" />
          <div
            className="loaderContainer"
            style={{ backgroundImage: `url(${border})` }}
          >
            <img className="loader" src={logo} width={100} height={100} />
          </div>
          <div className="text">Hello World!</div>
          <div className="text">{this.state.count}</div>
          <div className="buttons">
            <button className="button" onClick={() => this.handleCount(1)}>
              +
            </button>
            <button className="button" onClick={() => this.handleCount(-1)}>
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
