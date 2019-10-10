import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoListLink extends Component {
    render() {        
        return (
            <a 
                className='home_list_link'
                onClick={this.openTheList.bind(this)}
            >
            {/* origanal version
            <a 
                className='home_list_link'
                onClick={this.props.loadList.bind(this, this.props.todoList)}
            ></a> */}
                {this.props.todoList.name}<br />
            </a>
        )
    }

    openTheList(){
        this.props.loadList(this.props.todoList)
        //this.props.loadlist.bind(this, this.props.todoList)
    //this.props.loadList.bind(this, this.props.todoList);
    }
}


TodoListLink.propTypes = {
    loadList: PropTypes.func.isRequired,
    todoList: PropTypes.object.isRequired
}

export default TodoListLink
