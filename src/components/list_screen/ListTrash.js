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
        //alert("!!");
        
        document.getElementById("modal_content").hidden=false;
        document.getElementById("modal_content").classList.add("animateIn");
        document.getElementById("modal_yes_no_dialog").hidden=false;
        
        
    }
    
}

export default ListTrash
