import React, { Component } from 'react';

class Task extends Component {
   
 
  state = { task: {} }

  componentWillReceiveProps(props) {
    fetch('/tasks/'+this.props.match.params.number)
      .then(res => res.json())
      .then(task => this.setState({ task }));
  }

    render() {
        return (
            <div className="App">

                <h1>{this.state.task.title}</h1>
               <p>{this.state.task.text}</p>
            </div>
        );
    }
}

export default Task;