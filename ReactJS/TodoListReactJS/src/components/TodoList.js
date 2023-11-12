import React, {Component} from 'react';
import '../styles/TodoList.css';
import TodoListItem from './TodoListItem';
import PropsTypes from 'prop-types';

class TodoList extends Component{

constructor(props){
  super(props);
  this.state={
    items : this.props.items
  }
}

componentWillReceiveProps(nextProps){
  console.log(nextProps);

  if(nextProps.items.length != this.state.items.length){
    this.setState({items: nextProps.items});
  }

}


//resiva una lista y q la muestre
  render(){
    let items = this.props.items.map((actual, posicion, array)=>{
      console.log(actual, posicion);
      return (
        <TodoListItem name={actual} key={posicion} />
      )
    });
    return(//  {items}
      <div className="TodoList">
          <ul>
            {items}
          </ul>
      </div>
    );
  }

}

TodoList.propsTypes ={
  items:PropsTypes.array.isRequired
}

export default TodoList;
