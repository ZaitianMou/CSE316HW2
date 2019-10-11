import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { throwStatement } from '@babel/types';

export class ItemScreen extends Component {
    render() {
        return (
            <div>
            <div id="item_edit_screen" >
                Item<br></br>
                <p id="item_description_prompt">Description:</p>  <input type="text" name="Description" id="newDescription"/>
                <p id="item_assigned_to_prompt">Assigned To: </p> <input type="text" name="AssignedTo" id="newAssignedTo" /> 
                <p id="item_due_date_prompt">Due Date:</p>  <input type="date" name="DueDate" id="newDueDate"/> 
                <p id="item_completed_prompt">Completed: </p> <input type="checkbox" name="Completed" id="newCompleted"/>
                <button id="item_edit_screen_submit_button" className="button" onClick={this.handleSubmit}>Submit</button>
                <button id="item_edit_screen_cancel_button" className="button" onClick={this.handleCancel}>Cancel</button>
            </div>
            </div>
        )
    }

    handleSubmit=()=>{
        var x=this.props.todoList.items.indexOf(this.props.listItem);

        //when it's creating a new item.
        if (x<0){
            alert("new item");
            //start from here
        }
        //when it's editting a item
        else{
            alert("edit item");
        }
    }
    handleCancel=()=>{
        this.props.loadList(this.props.todoList);
    }
}



ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
