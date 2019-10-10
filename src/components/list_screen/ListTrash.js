import React, { Component } from 'react'
import TodoListLinks from '../home_screen/TodoListLinks'
import ListDeleteModal from './ListDeleteModal'

export class ListTrash extends Component {
    render() {
        return (
            <div id="list_trash" onClick={this.handleDeleteList}>&#128465;</div>
        )
    }

    handleDeleteList = () => {

        this.props.loadDeleteListDialog();
        // let index = this.props.todoLists.indexOf(this.props.todoList);
        // this.props.todoLists.splice(index, 1);
        // this.props.goHome();
        
    }
    
}

export default ListTrash
