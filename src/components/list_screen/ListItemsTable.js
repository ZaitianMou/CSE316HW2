import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                    <div className="list_item_task_header" onClick={this.sortByItemDescription}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.sortByItemDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.sortByItemCompleted}>Status</div>
                </div>

                {
                    this.props.todoList.items.map((todoItem) => (
                        <ListItemCard
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.props.todoList} 
                            goHome={this.props.goHome}
                            loadList={this.props.loadList}/>
                    ))
                }


            </div>
        )
    }
    sortByItemDescription = () => {
        if (this.props.todoList.currentSortCriteria == "sortByItemDescriptionIncrease") { this.props.todoList.currentSortCriteria = "sortByItemDescriptionDecrease"; }
        else { this.props.todoList.currentSortCriteria = "sortByItemDescriptionIncrease"; }

        this.props.todoList.items.sort(this.compareByDescription);
        this.props.goHome();
    }
    compareByDescription = (item1, item2) => {
        if (this.props.todoList.currentSortCriteria == "sortByItemDescriptionIncrease") {
            if (item1.description < item2.description)
                return -1;
            else if (item1.description > item2.description)
                return 1;
            else
                return 0;
        }
        else {
            if (item1.description < item2.description)
                return 1;
            else if (item1.description > item2.description)
                return -1;
            else
                return 0;
        }
    }

    sortByItemDueDate = () => {
        if (this.props.todoList.currentSortCriteria == "sortByItemDueDateIncrease") { this.props.todoList.currentSortCriteria = "sortByItemDueDateDecrease"; }
        else { this.props.todoList.currentSortCriteria = "sortByItemDueDateIncrease"; }

        this.props.todoList.items.sort(this.compareByDueDate);
        this.props.goHome();
    }

    compareByDueDate = (item1, item2) => {
        if (this.props.todoList.currentSortCriteria == "sortByItemDueDateIncrease") {
            if (item1.due_date < item2.due_date)
                return -1;
            else if (item1.due_date > item2.due_date)
                return 1;
            else
                return 0;
        }
        else {
            if (item1.due_date < item2.due_date)
                return 1;
            else if (item1.due_date > item2.due_date)
                return -1;
            else
                return 0;
        }
    }

    sortByItemCompleted = () => {
        if (this.props.todoList.currentSortCriteria == "sortByItemCompletedIncrease") { this.props.todoList.currentSortCriteria = "sortByItemCompletedDecrease"; }
        else { this.props.todoList.currentSortCriteria = "sortByItemCompletedIncrease"; }

        this.props.todoList.items.sort(this.compareByCompleted);
        this.props.goHome();
    }
    compareByCompleted = (item1, item2) => {
        if (this.props.todoList.currentSortCriteria == "sortByItemCompletedIncrease") {
            if (item1.completed < item2.completed)
                return -1;
            else if (item1.completed > item2.completed)
                return 1;
            else
                return 0;
        }
        else {
            if (item1.completed < item2.completed)
                return 1;
            else if (item1.completed > item2.completed)
                return -1;
            else
                return 0;
        }
    }


}

export default ListItemsTable