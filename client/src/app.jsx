import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <div>
        <ul>I AM RENDERING</ul>
        <Board></Board>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));