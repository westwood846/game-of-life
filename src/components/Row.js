import React from 'react';
import Cell from './Cell';
import './Row.css';

class Row extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render = () => {
    return <div className="Row">{this.props.cells.map((alive, index) => <Cell key={this.props.row + 'x' + index} alive={alive}></Cell>)}</div>
  }
}

export default Row;