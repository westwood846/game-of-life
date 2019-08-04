import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import World from './components/World';
import { togglePaused, setTickDuration, tick } from "./actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.worldRef = React.createRef();

    this.handleTickDurationInputChange = this.handleTickDurationInputChange.bind(this);
    // this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    // this.handleRandomButtonClick = this.handleRandomButtonClick.bind(this);
  }

  handleTickDurationInputChange = event => {
    let newTickDuration = Number(event.target.value);
    this.props.setTickDuration(newTickDuration);
  }

  // handleClearButtonClick = () => {
  //   this.worldRef.current.clearWorld();
  // }

  // handleRandomButtonClick = () => {
  //   this.worldRef.current.randomizeWorld();
  // }

  render = () => {
    // let props = { 
    //   paused: this.state.paused,
    //   tickDuration: this.state.tickDuration
    // }

    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={this.props.togglePaused}>{this.props.paused ? "Resume" : "Pause"}</button>
          <label>Tick Duration: <input type="number" step="100" min="100" value={this.props.tickDuration} onChange={this.handleTickDurationInputChange}></input></label>
        </div>
        <div className="controls">
          <button onClick={this.props.tick}>Tick</button>
          {/* <button onClick={this.handleClearButtonClick}>Clear</button> */}
          {/* <button onClick={this.handleRandomButtonClick}>Random</button> */}
        </div>
        <World></World>
        {/* <World {...props} ref={this.worldRef}></World> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  paused: state.paused,
  tickDuration: state.tickDuration
})

const mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused()),
  setTickDuration: tickDuration => dispatch(setTickDuration(tickDuration)),
  tick: () => dispatch(tick())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
