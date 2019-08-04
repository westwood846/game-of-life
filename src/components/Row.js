import React from 'react';
import Cell from './Cell';
import './Row.css';

class Row extends React.Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (row, col) => event => {
    this.props.handleCellClick(row, col);
  }


  render = () => {
    return <div className="Row">
      {this.props.cells.map((alive, index) => <Cell key={this.props.row + 'x' + index} alive={alive} onClick={this.handleClick(this.props.row, index)}></Cell>)}
    </div>
  }
}

export default Row;