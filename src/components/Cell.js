import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  render = () => {
    return <div className={"Cell " + (this.props.alive ? 'alive' : 'dead')} onClick={this.props.onClick}></div>
  }
}

export default Cell;