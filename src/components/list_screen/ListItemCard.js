import React, { Component } from 'react'
import MoveDown from '../images/MoveDown.png'
import MoveUp from '../images/MoveUp.png'
import Delete from '../images/Delete.png'

export class ListItemCard extends Component {

    whetherCompleted(x) {
        if (x)
            return "Completed";
        else {
            return "Pending";
        }
    }

    render() {
        // let styleColor="font-color-red";
        // if (!this.props.listItem.completed){
        //     styleColor="color: rgb(214, 10, 10);";
        // }
        if (this.props.listItem.completed)
            var classForWhetherCompleted = "ItemCompleted";

        else
            var classForWhetherCompleted = "ItemNotCompleted";

        return (
            <div className='list_item_card' onClick={() => this.props.loadItemScreen(this.props.listItem)}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed' className={classForWhetherCompleted}>
                    {this.whetherCompleted(this.props.listItem.completed)}
                </div>
                <div className='list_item_card_toolbar'>
                    <span className={'list_item_card_button' + ' ' + (this.props.todoList.items.indexOf(this.props.listItem) == 0 ? 'disabled' : '')}
                        onClick={this.listItemMoveUp.bind(this)}
                    > &#x21e7;</span>

                    <span className={'list_item_card_button' + ' ' + (this.props.todoList.items.indexOf(this.props.listItem) == this.props.todoList.items.length - 1 ? 'disabled' : '')}
                        onClick={this.listItemMoveDown.bind(this)}>
                        &#x21e9;</span>

                    <span className={'list_item_card_button'}
                        onClick={this.listItemDelete.bind(this)}
                    >&#10005;</span>
                </div>
            </div>
        )
    }
    nothingHappens = (event) => {
        alert("nothg")
    }
    disableButton = () => {
        console.log(this.props.listItem.key);

        if (this.props.todoList.items.indexOf(this.props.listItem) == 0) {
            //alert(this.props.listItem.key);
            console.log(document.getElementById("ListItemMoveUp"));
            //document.getElementById("ListItemMoveUp").style.pointerEvents="none";
        }
    }
    listItemMoveUp = (event) => {
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        if (index >= 1) {
            let temp = this.props.todoList.items[index - 1];
            this.props.todoList.items[index - 1] = this.props.todoList.items[index];
            this.props.todoList.items[index] = 2
            this.props.loadList(this.props.todoList)
        }
        event.stopPropagation();
    }
    listItemMoveDown = (event) => {
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        if (index < this.props.todoList.items.length - 1) {
            let temp = this.props.todoList.items[index + 1];
            this.props.todoList.items[index + 1] = this.props.todoList.items[index];
            this.props.todoList.items[index] = temp;
            this.props.loadList(this.props.todoList);
        }
    }
    listItemDelete = (event) => {
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        this.props.todoList.items.splice(index, 1);
        this.props.loadList(this.props.todoList);

    }
}

export default ListItemCard
