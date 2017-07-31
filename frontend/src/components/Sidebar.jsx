import React, { Component } from 'react';


import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Task from './Task.jsx';




class CustomSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 200 };
    }

    

    render() {
        return (
            <div className='side-bar' style={{ width: this.state.width }}>
                <div className='bar-content'>

                    {this.props.items.map((item, index) => (
                        <li className='task' key={index} name={item.title}><Link to={`/task/${index}`}>{item.title}</Link></li>
                    ), this)}

                </div>
                <div className='draggable' onMouseDown={this.onMouseDown.bind(this)}></div>
            </div>
        );
    }

    onMouseDown() {
        const mousemoveHandler = ({ pageX }) => {
            this.setState({
                width: `${Math.max(80, pageX)}px`
            });
        };

        const mouseupHandler = (event) => {
            document.removeEventListener('mousemove', mousemoveHandler, false);
            document.removeEventListener('mouseup', mouseupHandler, false);
        };

        document.addEventListener('mousemove', mousemoveHandler, false);
        document.addEventListener('mouseup', mouseupHandler, false);
    }
}




export default CustomSidebar;
