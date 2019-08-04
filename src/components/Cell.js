import React from 'react';
import { connect } from 'react-redux';
import './Cell.css';
import { toggleCell } from '../actions/index';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick = () => {
    this.props.toggleCell(this.props.row, this.props.col);
  }

  render = () => {
    return <div className={"Cell " + (this.props.alive ? 'alive' : 'dead')} onClick={this.handleCellClick}></div>
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCell: (row, col) => dispatch(toggleCell(row, col))
})

export default connect(null, mapDispatchToProps)(Cell);