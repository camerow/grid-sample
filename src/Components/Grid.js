import React, { Component } from 'react';
import GridRow from './GridRow';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows,
      childRows: props.childRows,
      selectedRows: []
    }
  }

  selectRow(rowID) {
    let selectedRows = this.state.selectedRows.concat(rowID);
    this.setState({
      selectedRows
    });
  }

  deleteSelectedRows() {
    let newRows = this.state.rows.filter(row => !this.state.selectedRows.includes(row.id));
    this.setState({
      rows: newRows
    })
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-4'>
            <button onClick={() => this.deleteSelectedRows()} className='button delete'>Delete</button>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-4">
            <h3>Product Name</h3>
          </div>
          <div className="col-md-4">
            <h3>Product Category</h3>
          </div>
          <div className="col-md-4">
            <h3>Transactions</h3>
          </div>
        </div>
        {
          this.state.rows.map((row, i) => {
            const { data, id } = row;
            return (
              <GridRow {...data}
                onSelect={(rowID) => this.selectRow(rowID)}
                key={id}
                id={id}
                isSelected={false}
                children={this.state.childRows.filter((child) => {
                  return child.parent === row.id
                })}
                />
            );
          })
        }
      </div>
    );
  }
}

export default Grid;
