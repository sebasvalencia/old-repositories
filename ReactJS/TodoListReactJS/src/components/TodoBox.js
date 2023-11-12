import React, {Component} from 'react';
import '../styles/TodoBox.css';
import PropsTypes from 'prop-types';


class TodoBox extends Component{

  constructor(props){
    super(props);
    this.state={
      todoText: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      todoText: e.target.value
    });
  }

  onSubmit(e){
    //console.log(e);
    e.preventDefault();//evitar q el evento se propague
    this.props.onSubmit(e);//Manda a llamar el metodo del padre
    this.setState({todoText: ''});//poner en blaco el input
  }

  //regresa el valor desde App.js
  getInputValue(){
    return this.state.todoText;
  }


  render(){
    return(
      <div className="TodoBox">
        <form onSubmit={this.onSubmit}>
          <input
              type="text"
              className="TodoBox-input"
              value={this.state.todoText}
              onChange={this.onChange}/>
          <input
              type="submit"
              className="TodoBox-button"
              value="Agregar"/>
        </form>
      </div>
    );
  }

}

TodoBox.PropsTypes = {
  onSubmit : PropsTypes.func.isRequired
}


export default TodoBox;
