import React from 'react';
import Row from './Row';
import './World.css';

class World extends React.Component {

  WORLD_WIDTH = 16;
  WORLD_HEIGHT = 16;

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

  }

  render = () => {
    return <div className="World">
      {this.state.world.map((row, index) => <Row key={index} cells={row}></Row>)}
    </div>
  }
}

export default World;