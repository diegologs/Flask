import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import CustomNavbar from './components/Navbar.jsx';
import CustomSidebar from './components/Sidebar.jsx';
import Task from './components/Task.jsx';

import { Container, Row, Col } from 'reactstrap';




class App extends Component {
  state = { tasks: [] }

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">

        <CustomNavbar></CustomNavbar>
        <CustomSidebar items={this.state.tasks} />


        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Route path="/task/:number" component={Task} />
            <h1>Tasks</h1>
            <ul>
              {this.state.tasks.map(task =>
                <li>{task.text}</li>
              )}
            </ul>
          </Col>
        </Row>
     
        
      </div >
    );
  }
}

export default App;