import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { throwStatement, bigIntLiteral } from '@babel/types';
import transaction_ItemEdit from '../../transaction_ItemEdit';

export class ItemScreen extends Component {
    render() {
        var index = this.props.todoList.items.indexOf(this.props.listItem)
        if (index >= 0) {
            var des = this.props.todoList.items[index].description;
            var ass = this.props.todoList.items[index].assigned_to;
            var due = this.props.todoList.items[index].due_date;
            var com = this.props.todoList.items[index].completed;
        }
        else {
            var des = "";
            var ass = "";
            var due = "";
            var com = "";
        }
        return (
            <div id="item_edit_screen" >
                Item<br></br>

                <p id="item_description_prompt">Description:</p>  <input type="text" name="Description" id="newDescription" defaultValue={des} />
                <p id="item_assigned_to_prompt">Assigned To: </p> <input type="text" name="AssignedTo" id="newAssignedTo" defaultValue={ass} />
                <p id="item_due_date_prompt">Due Date:</p>  <input type="date" name="DueDate" id="newDueDate" defaultValue={due} />
                <p id="item_completed_prompt">Completed: </p> <input type="checkbox" name="Completed" id="newCompleted" defaultChecked={com} />
                <button id="item_edit_screen_submit_button" className="button" onClick={this.handleSubmit}>Submit</button>
                <button id="item_edit_screen_cancel_button" className="button" onClick={this.handleCancel}>Cancel</button>
            </div>
        )

    }


    callBackForItemEdit(oldDes,oldAss,oldDue,oldCom,des,ass,due,com,whetherCreate){

        
        // when create new item
        if (whetherCreate){
           
            
            var whetherInList=false;
            var index=0;
           
            for (index=0;index<this.props.todoList.items.length;index++){
                
                if (this.props.todoList.items[index].description==des && this.props.todoList.items[index].assigned_to==ass
                    && this.props.todoList.items[index].due_date==due && this.props.todoList.items[index].completed==com) {
                    whetherInList=true;
                    break;
                }
            }
            if(whetherInList){
                //undo
                this.props.todoList.items.splice(index,1)
                
                this.props.loadList(this.props.todoList);
            }
            //redo
            else{
                var length = this.props.todoList.items.length;
                this.props.todoList.items[length] = {
                    "key": length,
                    "description": des,
                    "due_date": due,
                    "assigned_to": ass,
                    "completed": com
                }
                this.props.loadList(this.props.todoList);
            }
        }

        
        else{
            //when edit item
            //console.log(oldDes+"||"+oldAss+"||"+oldDue+"||"+oldCom+"||"+des+"||"+ass+"||"+due+"||"+com);
            if (this.props.listItem.description==des &&this.props.listItem.assigned_to==ass &&
                this.props.listItem.due_date==due && this.props.listItem.completed==com){
                //for undo
                   
                    this.props.listItem.description = oldDes;
                    this.props.listItem.assigned_to = oldAss;
                    this.props.listItem.due_date = oldDue;
                    this.props.listItem.completed = oldCom;
                    this.props.loadList(this.props.todoList);
                }
                //for do
                else{
                    this.props.listItem.description = des;
                    this.props.listItem.assigned_to = ass;
                    this.props.listItem.due_date = due;
                    this.props.listItem.completed = com;
                    this.props.loadList(this.props.todoList);
                    
                }
        }
    }
    
    handleSubmit = () => {
        var x = this.props.todoList.items.indexOf(this.props.listItem);
        var newDescription = document.getElementById("newDescription").value;
        var newAssignedTo = document.getElementById("newAssignedTo").value;
        var newDueDate = document.getElementById("newDueDate").value;
        var newCompleted = document.getElementById("newCompleted").checked;
        //when it's creating a new item.
        if (x < 0) {
            // var length = this.props.todoList.items.length;
            // this.props.todoList.items[length] = {
            //     "key": length,
            //     "description": newDescription,
            //     "due_date": newDueDate,
            //     "assigned_to": newAssignedTo,
            //     "completed": newCompleted
            // }
            var transaction=new transaction_ItemEdit("","","","",newDescription,newAssignedTo,newDueDate,newCompleted,true,this.callBackForItemEdit.bind(this));
            this.props.TPS.addTransaction(transaction);
            //this.props.loadList(this.props.todoList);
        }
        //when it's editting a item
        else {
            // this.props.listItem.description = newDescription;
            // this.props.listItem.assigned_to = newAssignedTo;
            // this.props.listItem.due_date = newDueDate;
            // this.props.listItem.completed = newCompleted;
            // this.props.loadList(this.props.todoList);
            var transaction=new transaction_ItemEdit(this.props.listItem.description, this.props.listItem.assigned_to,this.props.listItem.due_date,
                this.props.listItem.completed, newDescription,newAssignedTo,newDueDate,newCompleted,false,this.callBackForItemEdit.bind(this));
            this.props.TPS.addTransaction(transaction);

        }


    }
    handleCancel = () => {
        this.props.loadList(this.props.todoList);
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
