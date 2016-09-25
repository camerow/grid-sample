import React, { Component } from 'react';
import './App.css';
import data from '../db.json';

const { products, transactions } = data;
console.log(transactions);
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App-header row">
        </div>
        <Grid>
          {
            products.map((product, i) => {
              const { data, id } = product;
              return (
                <GridRow key={id} {...data} transactions={transactions.filter((trans) => trans.id === product.id)} />
              );
            })
          }
        </Grid>
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

class GridRow extends Component {
  constructor() {
    super();
    this.state =  {
      showChildRows: false
    };
  }

  toggleChildRows() {
    this.setState({
      showChildRows: !this.state.showChildRows
    })
  }

  render() {
    const { productCategory, productName, transactions } = this.props;

    return (
      <div>
        <div onClick={() => this.toggleChildRows()} style={{padding: '10px 0 0 0'}} className='row'>
          <div className="col-md-4">
            {productName}
          </div>
          <div className="col-md-4">
            {productCategory}
          </div>
          <div className="col-md-4">
            {`${transactions.length} transactions`}
          </div>
        {this.props.children}
        </div>
        {
          this.state.showChildRows ?
          transactions.map((trans, i) => {
            return (
              <div className='container'>

                <div className='child-row row'>
                  <div className='col-md-offset-1 col-md-3' key={i+trans.id}>
                    {trans.data.name}
                  </div>
                  <div className='col-md-4'>
                    {trans.data.transaction}
                  </div>
                  <div className='col-md-4'>
                    {trans.data.date}
                  </div>
                </div>
              </div>
            );
          })
          :
          null
        }
      </div>
    );
  }
}
export default App;
