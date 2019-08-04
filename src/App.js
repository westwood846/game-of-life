import React from 'react';
import './App.css';
import World from './components/World';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      tickDuration: 100,
    }

    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
  }

  handlePauseButtonClick = () => {
    this.setState({
      paused: !this.state.paused
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
        </div>
        <World {...props}></World>
      </div>
    );
  }
}

export default App;
