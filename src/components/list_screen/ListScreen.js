import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import AddItem from '../images/BigPlus.png'
import PropTypes from 'prop-types'

//import { threadId } from 'worker_threads';

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash goHome={this.props.goHome} todoList={this.props.todoList} todoLists={this.props.todoLists}
                    loadDeleteListDialog={this.props.loadDeleteListDialog} />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input
                            defaultValue={this.getListName()}
                            type="text"
                            id="list_name_textfield"
                            onChange={this.changeListName} />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input
                            defaultValue={this.getListOwner()}
                            type="text"
                            id="list_owner_textfield"
                            onChange={this.changeListOwner}
                        />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} goHome={this.props.goHome} 
                loadList={this.props.loadList} loadItemScreen={this.props.loadItemScreen} />
                <div>
                    <img src={AddItem} id="list_item_add_button" onClick={this.props.loadItemScreen}>
                    </img>
                </div>
            </div>
        )
    }

    changeListName = (event) => {
        this.props.todoList.name = event.target.value
    }
    changeListOwner = (event) => {
        this.props.todoList.owner = event.target.value
    }
}

export default ListScreen