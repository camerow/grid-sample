import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid';
import SetStateExample from './Components/SetStateExample';
// import data from '../db.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0
    };
  }

  render() {
    const { products, transactions } = this.props.data;

    return (
      <div className="container-fluid">
        <div className="App-header row">
          <div className="col-md-1">
            {this.state.currentStep > 0 ? <button onClick={ () => this.setState({ currentStep: this.state.currentStep - 1 })} className="button navigation-btn">Previous</button> : null}
          </div>
          <div className="col-md-10">
            <h2 style={{color:"#fff"}}>
              <span style={{color:'#de4343'}}>Emergency</span> <span style={{color:'orange'}}>Reporting</span> React Training
            </h2>
          </div>
          <div className="col-md-1">
            <button onClick={ () => this.setState({ currentStep: this.state.currentStep + 1 })} className="button navigation-btn">Next</button>
          </div>
        </div>

        <Stepper step={this.state.currentStep}>
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
        step: props.step
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
        {this.props.children[this.state.step]}
      </div>
    );
  }
}
export default App;
