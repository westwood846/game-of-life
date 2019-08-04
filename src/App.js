import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import World from './components/World';
import { togglePaused, setTickDuration, tick, randomize, clear } from "./actions/index";
import Game from './gameOfLife';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleTickDurationInputChange = this.handleTickDurationInputChange.bind(this);
  }

  handleTickDurationInputChange = event => {
    let newTickDuration = Number(event.target.value);
    this.props.setTickDuration(newTickDuration);
  }

  render = () => {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={this.props.togglePaused}>{this.props.paused ? "Resume" : "Pause"}</button>
          <label>Tick Duration: <input type="number" step="100" min="100" value={this.props.tickDuration} onChange={this.handleTickDurationInputChange}></input></label>
        </div>
        <div className="controls">
          <button onClick={this.props.tick(true)}>Tick</button>
          <button onClick={this.props.randomize}>Randomize</button>
          <button onClick={this.props.clear}>Clear</button>
        </div>
        <World></World>
        <div className="statusbar">
          <span>Generation: {this.props.generation}</span>
          <span>Population: {Game.getPopulation(this.props.world)}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  paused: state.paused,
  tickDuration: state.tickDuration,
  world: state.world,
  generation: state.generation
})

const mapDispatchToProps = dispatch => ({
  togglePaused:    ()           => dispatch(togglePaused()),
  setTickDuration: tickDuration => dispatch(setTickDuration(tickDuration)),
  tick:            manual => () => dispatch(tick(manual)),
  randomize:       ()           => dispatch(randomize()),
  clear:           ()           => dispatch(clear()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
