import React, { Component } from 'react';

class SetStateExample extends Component {
  constructor() {
    super();
    this.state = {
      timeUp: 0
    };
  }

  componentDidMount() {
    this.IID = setInterval(() => {
      this.setState({
        timeUp: this.state.timeUp + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.IID);
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h3>Uptime: {this.state.timeUp}</h3>
      </div>
    );
  }
}

export default SetStateExample;
