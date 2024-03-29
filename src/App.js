import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import ListDeleteModal from './components/list_screen/ListDeleteModal'
import jTPS from './jTPS'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN",
  LIST_DELETE_MODAL: "LIST_DELETE_MODAL"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    listItemForItemScreen:null,
    TPS:new jTPS()
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    this.state.TPS.clearAllTransactions();
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    //console.log("currentList: " + this.state.currentList);
    //console.log("currentScreen: " + this.state.currentScreen);
  }
  loadDeleteListDialog = () =>{
    this.setState({currentScreen:AppScreen.LIST_DELETE_MODAL})
  }

  loadItemScreen =(listItem)=>{
    this.setState({currentScreen:AppScreen.ITEM_SCREEN});
    this.setState({listItemForItemScreen:listItem})
  }
  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        goHome={this.goHome.bind(this)}
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          loadList={this.loadList.bind(this)}
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList} 
          todoLists={this.state.todoLists}
          loadItemScreen={this.loadItemScreen.bind(this)}
          loadDeleteListDialog={this.loadDeleteListDialog.bind(this)}
          TPS={this.state.TPS}
          />;
      case AppScreen.ITEM_SCREEN:
        //alert("!!");
        return <ItemScreen 
        loadList={this.loadList.bind(this)} 
        todoList={this.state.currentList} 
        TPS={this.state.TPS}
        loadItemScreen={this.loadItemScreen.bind(this)}
        listItem={this.state.listItemForItemScreen} />;

      case AppScreen.LIST_DELETE_MODAL:
        return <ListDeleteModal 
            goHome ={this.goHome.bind(this)}
            loadList={this.loadList.bind(this)}/>;

      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;