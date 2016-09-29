import React, { Component } from 'react';

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
      let columns = Object.keys(child).length;
      let columnWidth = 12 / columns;

      return (
        <div key={i + child} className='container'>
          <div className='child-row row'>
            <div className={'col-md-' + columnWidth} key={i+child.id}>
              <input style={{verticalAlign: 'middle', marginRight: '3px'}} type='checkbox' />
              {child.data.name}
            </div>
            <div className={'col-md-' + columnWidth}>
              {child.data.transaction}
            </div>
            <div className={'col-md-' + columnWidth}>
              {child.data.date + ''}
            </div>
          </div>
        </div>
      );
    });
    return kids;
  }

  render() {
    const { productCategory, productName, children, selected } = this.props;

    return (
      <div>
        <div onClick={() => this.toggleChildRows()} style={{padding: '10px 0 0 0'}} className='row'>
          <div className="col-md-4">
            <input onClick={() => this.props.onSelect(this.props.id)} style={{verticalAlign: 'middle', marginRight: '3px'}} type='checkbox' />
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

export default GridRow;
