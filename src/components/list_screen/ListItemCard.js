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
            <div className='list_item_card' onClick={this.props.loadItemScreen}>
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
                    <img src={MoveUp} id="ListItemMoveUp" onClick={(e) => this.listItemMoveUp(e)}></img>
                </div>
                <div>
                    <img src={MoveDown}  id="ListItemMoveDown" onClick={this.listItemMoveDown.bind(this)}></img>
                </div>
                <div>
                    <img src={Delete} id="ListItemDelete" onClick={this.listItemDelete.bind(this)}></img>
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
        this.props.loadList(this.props.todoList)
    }
    listItemMoveDown =(event) => {
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        let temp=this.props.todoList.items[index+1];
        this.props.todoList.items[index+1]=this.props.todoList.items[index];
        this.props.todoList.items[index]=temp;
        this.props.loadList(this.props.todoList);
    }
    listItemDelete =(event) =>{
        event.stopPropagation();
        let index = this.props.todoList.items.indexOf(this.props.listItem);
        this.props.todoList.items.splice(index,1);
        this.props.loadList(this.props.todoList);
      
    }
}

export default ListItemCard
