import React, {Component} from 'react';
import PropsTypes from 'prop-types';

class TodoListItem extends Component{

constructor(props){
  super(props);
}

  render(){
    return(
      <li>
        {this.props.name}
      </li>
    );
  }

}

TodoListItem.propsTypes = {
  name : PropsTypes.string.isRequired
}


export default TodoListItem;
