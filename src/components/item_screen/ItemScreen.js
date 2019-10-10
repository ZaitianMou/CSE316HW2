import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    render() {
        return (
            <div id="item_edit_screen" >
                Item<br></br>
                <p id="item_description_prompt">Description:</p>  <input type="text" name="Description" id="newDescription"/>
                <p id="item_assigned_to_prompt">Assigned To: </p> <input type="text" name="AssignedTo" id="newAssignedTo" /> 
                <p id="item_due_date_prompt">Due Date:</p>  <input type="date" name="DueDate" id="newDueDate"/> 
                <p id="item_completed_prompt">Completed: </p> <input type="checkbox" name="Completed" id="newCompleted"/>
                <button id="item_edit_screen_submit_button" className="button button1">Submit</button>
                <button id="item_edit_screen_cancel_button" className="button button1">Cancel</button>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
