import React, { Component } from 'react';
import './App.css';
// import data from '../db.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      childrenSelected: []
    }
  }

  selectChildRow(rowID) {
    this.setState({
      childrenSelected: this.state.childrenSelected.push(rowID)
    })
  }

  render() {
    const { products, transactions } = this.props.data;
    console.log(transactions);
    return (
      <div className="container-fluid">
        <div className="App-header row">
          <div className="col-md-12">
            <h2 style={{color:"#fff"}}>
              React Training
            </h2>
          </div>
        </div>
        <Grid>
          {
            products.map((product, i) => {
              const { data, id } = product;
              return (
                <GridRow {...data}
                  key={id}
                  onRowClick={(rowID) => this.selectChildRow(rowID)}
                  selected={this.state.childrenSelected}
                  children={transactions.filter((trans) => {
                    return trans.product === product.id
                  })} />
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

  buildChildRows(children) {
    let kids = children.map((child, i) => {
      console.log(child);
      return (
        <div key={i + child} className='container'>

          <div className='child-row row'>
            <div className='col-md-offset-1 col-md-3' key={i+child.id}>
              {child.data.name}
            </div>
            <div className='col-md-4'>
              {child.data.transaction}
            </div>
            <div className='col-md-4'>
              {child.data.date + ''}
            </div>
          </div>
        </div>
      );
    });
    return kids;
  }

  render() {
    const { productCategory, productName, children } = this.props;

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
            {`${children.length} transactions`}
          </div>
        </div>
        {
          this.state.showChildRows ?
          this.buildChildRows(children)
          :
          null
        }
      </div>
    );
  }
}
export default App;
