import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import AddItem from '../images/BigPlus.png'
import PropTypes from 'prop-types'
import jTPS from '../../jTPS'
import jTPS_Transaction from '../../jTPS_Transaction'
import transaction_ListNameChange from '../../transaction_ListNameChange'
import transaction_ListOwnerChange from '../../transaction_ListOwnerChange'


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
    keyboardInput(e){
        if (e.key==='z' && e.ctrlKey){
            if (this.props.TPS.hasTransactionToUndo()){
                this.props.TPS.undoTransaction();
                //this.props.goHome();
                //alert("Undo")
                this.props.loadList(this.props.todoList)
            }
        }
        //redo
        else if (e.key==='y'&& e.ctrlKey){
            if (this.props.TPS.hasTransactionToRedo()){
                this.props.TPS.doTransaction();
                //this.props.goHome();
                // alert("Redo")
                this.props.loadList(this.props.todoList)
            }
        }
    }
    render() {
        return (
            <div id="todo_list" onKeyDown={e =>this.keyboardInput(e)} tabIndex="0" >
                <ListHeading goHome={this.props.goHome} />
                <ListTrash goHome={this.props.goHome} todoList={this.props.todoList} todoLists={this.props.todoLists}
                    loadDeleteListDialog={this.props.loadDeleteListDialog} />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input
                            value={this.getListName()}
                            type="text"
                            id="list_name_textfield"
                            onChange={e=>this.changeListName(e)} />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input
                            value={this.getListOwner()}
                            type="text"
                            id="list_owner_textfield"
                            onChange={this.changeListOwner}
                        />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} goHome={this.props.goHome} TPS={this.props.TPS}
                    loadList={this.props.loadList} loadItemScreen={this.props.loadItemScreen} />
                <div>
                    <img src={AddItem} id="list_item_add_button" onClick={this.props.loadItemScreen}>
                    </img>
                </div>
                {/* this it the modal when delete the list*/}

                <div id="modal_yes_no_dialog" hidden>
                    <div id="modal_content" >
                        <p>Delete list?</p>
                        <b>Are you sure you want to delete this list? </b><br></br>
                        <button id="modal_yes_button" className="modal_button" onClick={this.processConfirmDeleteList}>YES</button>
                        <button id="modal_no_button" className="modal_button" onClick={this.processCancelDeleteList}>NO</button>
                        <p>The list will not be retreivable.</p>
                    </div>
                </div>
            </div>
        )
    }

    callBackForListNameChange(n){
        this.props.todoList.name=n;
    }
    callBackForListOwnerChange(o){
        this.props.todoList.owner=o;
    }


    changeListName = (event) => {
        var transaction=new transaction_ListNameChange(this.getListName(),event.target.value,this.callBackForListNameChange.bind(this));
        this.props.todoList.name = event.target.value;
        this.props.TPS.addTransaction(transaction); 
        this.props.loadList(this.props.todoList);
    }
    changeListOwner = (event) => {
        var transaction=new transaction_ListOwnerChange(this.getListOwner(),event.target.value,this.callBackForListOwnerChange.bind(this));
        this.props.todoList.owner = event.target.value
        this.props.TPS.addTransaction(transaction)
        this.props.loadList(this.props.todoList);
    }
    processConfirmDeleteList = () => {
        //first delete the list 
        let index = this.props.todoLists.indexOf(this.props.todoList);
        this.props.todoLists.splice(index, 1);
        //and then close the dialog
        let dialog = document.getElementById("modal_content");
        dialog.classList.add("animateOut");

        setTimeout(function () {
            dialog.classList.remove("animateOut");
            dialog.hidden = true;
            dialog = document.getElementById("modal_yes_no_dialog");
            dialog.hidden = true;
        }, 2000);

        //finally go to the home page
        setTimeout(() => {
            this.props.goHome();
        }, 2000)
    }
    processCancelDeleteList = () => {
        let dialog = document.getElementById("modal_content");
        dialog.classList.add("animateOut");
        setTimeout(function () {
            dialog.classList.remove("animateOut");
            dialog.hidden = true;
            dialog = document.getElementById("modal_yes_no_dialog");
            dialog.hidden = true;
        }, 2000);
    }
}

export default ListScreen