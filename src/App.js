import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid';
import SetStateExample from './Components/SetStateExample';
// import data from '../db.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      steps: 0
    };
  }

  render() {
    const { products, transactions } = this.props.data;
    console.log(this.props.children);
    return (
      <div className="container-fluid">
        <div className="App-header row">
          <div className="col-md-12">
            <h2 style={{color:"#fff"}}>
              <span style={{color:'#de4343'}}>Emergency</span> <span style={{color:'orange'}}>Reporting</span> React Training
            </h2>
          </div>
        </div>

        <Stepper step={this.state.step}>
          <SetStateExample />
          <Grid rows={products} childRows={transactions} />
          <div>Thanks!</div>
        </Stepper>

      </div>
    );
  }
}

class Stepper extends Component {
  constructor(props) {
    super(props);
      this.state = {
        step: props.step,
        steps: props.children.length
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      step: nextProps.step
    })
  }
  render() {
    return (
      <div>
        <div className="col-md-1">
          {this.state.step > 0 ? <button onClick={ () => this.setState({ step: this.state.step - 1 })} className="button navigation-btn">Previous</button> : null}
        </div>
        <div style={{padding: '0 40px'}} className="col-md-10">{this.props.children[this.state.step]}</div>
        <div className="col-md-1">
          {(this.state.step >= this.props.children.length - 1) ? null : <button onClick={ () => this.setState({ step: this.state.step + 1 })} className="button navigation-btn">Next</button>}
        </div>

      </div>
    );
  }
}
export default App;
