import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CustomNavbar from './Navbar.jsx';
import CustomSidebar from './Sidebar.jsx';




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
       
       <CustomNavbar></CustomNavbar>
       <CustomSidebar></CustomSidebar>
        <ul>
        <h1>Tasks</h1>
        {this.state.tasks.map(task =>
          <li>{task.title}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;