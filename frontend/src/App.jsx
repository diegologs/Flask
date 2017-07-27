import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {tasks: []}

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">
        <ul>
        <h1>Tasks</h1>
        {this.state.tasks.map(task =>
          <li>{task.text}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
