import React, { Component } from 'react';

class SetStateExample extends Component {
  constructor() {
    super();
    this.state = {
      timeUp: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeUp: this.state.timeUp + 1
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <p>Uptime: {this.state.timeUp}</p>
      </div>
    );
  }
}

export default SetStateExample;
