import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import CustomNavbar from './components/Navbar.jsx';
import CustomSidebar from './components/Sidebar.jsx';
import About from './About.jsx';




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
       <CustomSidebar items = {this.state.tasks} />
       <Route exact path="/about" component={About} />
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