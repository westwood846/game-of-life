import React from 'react';
import Row from './Row';
import './World.css';
import Game from "../gameOfLife";

class World extends React.Component {

  WORLD_WIDTH = 32;
  WORLD_HEIGHT = 48;

  constructor(props) {
    super(props);

    this.state = {
      world: []
    }
    for (let row = 0; row < this.WORLD_WIDTH; row++) {
      this.state.world[row] = [];
      for (let col = 0; col < this.WORLD_HEIGHT; col++) {
        this.state.world[row].push(Math.random() > .75);
      }
    }

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, this.props.tickDuration);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  componentWillUpdate = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.tick, this.props.tickDuration);
  }

  tick = () => {
    if (!this.props.paused) {
      let oldWorld = this.state.world;
      let newWorld = Game.tick(oldWorld);
      this.setState({world: newWorld});
    }
  }

  handleCellClick = (row, col) => {
    let oldWorld = this.state.world;
    let oldCellState = Game.getCell(oldWorld, row, col);
    let newWorld = Game.setCell(oldWorld, row, col, !oldCellState);
    this.setState({world: newWorld});
  }

  render = () => {
    return <div className="World">
      {this.state.world.map((row, index) => <Row key={index} row={index} cells={row} handleCellClick={this.handleCellClick}></Row>)}
    </div>
  }
}

export default World;