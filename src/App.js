import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid';
// import data from '../db.json';

class App extends Component {
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
    const { products, transactions } = this.props.data;

    return (
      <div className="container-fluid">
        <div className="App-header row">
          <div className="col-md-12">
            <h2 style={{color:"#fff"}}>
              <span style={{color:'#de4343'}}>Emergency</span> <span style={{color:'orange'}}>Reporting</span> React Training
            </h2>
          </div>
        </div>
        <p>Uptime: {this.state.timeUp}</p>
        <Grid rows={products} childRows={transactions} />
      </div>
    );
  }
}

export default App;
