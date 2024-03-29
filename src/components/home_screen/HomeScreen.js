import React, { Component } from 'react'
import Banner from './Banner'
import HomeHeader from './HomeHeader'
import TodoListLinks from './TodoListLinks'
import PropTypes from 'prop-types';
import ListScreen from '../list_screen/ListScreen';

export class HomeScreen extends Component {
    render() {
        return (
            <div id="todo_home">
                <div id="home_your_lists_container">
                    <HomeHeader />
                    <TodoListLinks loadList={this.props.loadList} todoLists={this.props.todoLists} />
                </div>
                <Banner />
                <div id="home_new_list_container">
                    <button id="home_new_list_button" onClick={this.createNewList.bind(this)}>
                        Create a New To Do List
                    </button>
                </div>
            </div>
        )
    }
    createNewList =() =>{
        //alert("!!!");
        let index = this.props.todoLists.length;
        this.props.todoLists.push({
            "key": index,
            "name": "UNKNOWN",
            "owner": "",
            "items": []
        })
        //this.props.goHome();
        this.props.loadList(this.props.todoLists[index]);
        console.log(this.props.todoLists[index])
    }
}

HomeScreen.propTypes = {
    loadList: PropTypes.func.isRequired,
    todoLists: PropTypes.array.isRequired
}

export default HomeScreen
