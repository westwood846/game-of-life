import React from 'react';
import './App.css';
import World from './components/World';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      tickDuration: 1000,
    }

    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
    this.handleTickDurationInputChange = this.handleTickDurationInputChange.bind(this);
  }

  handlePauseButtonClick = () => {
    this.setState({
      paused: !this.state.paused
    });
  }

  handleTickDurationInputChange = event => {
    this.setState({
      tickDuration: Number(event.target.value)
    });
  }

  render = () => {
    let props = { 
      paused: this.state.paused,
      tickDuration: this.state.tickDuration
    }

    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={this.handlePauseButtonClick}>{this.state.paused ? "Resume" : "Pause"}</button>
          <label>Tick Duration: <input type="number" step="100" min="100" value={this.state.tickDuration} onChange={this.handleTickDurationInputChange}></input></label>
        </div>
        <World {...props}></World>
      </div>
    );
  }
}

export default App;
