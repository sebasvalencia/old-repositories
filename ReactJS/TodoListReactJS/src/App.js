import React, { Component } from 'react';
import './styles/App.css';

import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';



class App extends Component {

constructor(){
  super();

  this.state = {
    todoItems :[]
  }

  this.onSubmit = this.onSubmit.bind(this);
}

// onSubmit={this.onSubmit} para q el control lo tenga el padre
// por props se le pasa a todoBox
  onSubmit(e){
    console.log("Metodo del padre");
    //regresa el estado de TodoBox
    let todoListValue = this.refs.todobox.getInputValue();
    console.log(todoListValue);
  //let newTodoItemsValue = this.state.todoItems.push(todoListValue);
    let newTodoItemsValue = this.state.todoItems.concat(todoListValue);
    this.setState({todoItems: newTodoItemsValue});

  }


  render() {
    //console.log("todoItems: ",this.state.todoItems);
    return (
      <div className="App">
        <h1 className="App-title">Mi primer Todo List</h1>
        <TodoBox
          ref="todobox"
          onSubmit={this.onSubmit}/>
        <TodoList
          ref="todolist"
          items={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
