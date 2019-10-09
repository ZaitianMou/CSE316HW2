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
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed'>
                    {this.whetherCompleted(this.props.listItem.completed)}
                </div>
                <div>
                    <img src={MoveUp} id="ListItemMoveUp" onClick={(e) => this.listItemMoveUp(e,this.props.key,this.props.listItem)}></img>
                </div>
                <div>
                    <img src={MoveDown}  id="ListItemMoveDown" onClick={this.listItemMoveDown}></img>
                </div>
                <div>
                    <img src={Delete} id="ListItemDelete" onClick={this.listItemDelete}></img>
                </div>
            </div>
        )
    }
    listItemMoveUp =(event) =>{
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        let temp=this.props.todoList.items[index-1];
        this.props.todoList.items[index-1]=this.props.todoList.items[index];
        this.props.todoList.items[index]=temp;
        this.props.goHome();
    }
    listItemMoveDown =(event) => {
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        let temp=this.props.todoList.items[index+1];
        this.props.todoList.items[index+1]=this.props.todoList.items[index];
        this.props.todoList.items[index]=temp;
        this.props.goHome();
    }
    listItemDelete =(event) =>{
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        this.props.todoList.items.splice(index,1);
        this.props.goHome();
    }
}

export default ListItemCard
