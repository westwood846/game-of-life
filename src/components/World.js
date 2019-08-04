import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import './World.css';
import Game from "../gameOfLife";

class World extends React.Component {

  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  // componentDidMount = () => {
  //   this.randomizeWorld();
  //   this.interval = setInterval(this.tick, this.props.tickDuration);
  // }

  // componentWillUnmount = () => {
  //   clearInterval(this.interval);
  // }

  // componentWillUpdate = () => {
  //   clearInterval(this.interval);
  //   this.interval = setInterval(this.tick, this.props.tickDuration);
  // }

  // tick = () => {
  //   if (!this.props.paused) {
  //     let oldWorld = this.state.world;
  //     let newWorld = Game.tick(oldWorld);
  //     this.setState({world: newWorld});
  //   }
  // }

  handleCellClick = (row, col) => {
    let oldWorld = this.state.world;
    let oldCellState = Game.getCell(oldWorld, row, col);
    let newWorld = Game.setCell(oldWorld, row, col, !oldCellState);
    this.setState({world: newWorld});
  }

  render = () => {
    return <div className="World">
      {this.props.world.map((row, index) => <Row key={index} row={index} cells={row} handleCellClick={this.handleCellClick}></Row>)}
    </div>
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(World);