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
                            listItem={todoItem} />
                    ))
                }
            </div>
        )
    }
    sortByItemDescription = () => {
        this.props.todoList.items.sort(this.compareByDescription);
        console.log(this.props)
        this.props.goHome();
    }
    compareByDescription(item1, item2) {
        if (item1.description < item2.description)
            return -1;
        else if (item1.description > item2.description)
            return 1;
        else
            return 0;
        
    }

    sortByItemDueDate() {

    }

    sortByItemCompleted() {

    }


}

export default ListItemsTable
