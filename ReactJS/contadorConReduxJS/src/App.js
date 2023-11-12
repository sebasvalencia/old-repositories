import React, { Component } from 'react';
import './App.css';

//Conectamos al store
import {connect} from 'react-redux';
import {increment, decrement} from './actions/index';

class App extends Component {

  constructor(props){
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

onIncrement(e){
  console.log("increment in view");
  this.props.onIncrement();
}

onDecrement(e){
  console.log("decrement in view");
  this.props.onDecrement();
}

  render() {
    return (
      <div className="App">
        <h2>Contador</h2>
        <label>{this.props.counter}</label><br/>
        <button onClick={this.onIncrement }>Incrementar</button>
        <button onClick={this.onDecrement }>Restar</button>
      </div>
    );
  }
}

//dos metoso de react-redux: mapStateToProps, mapDispatchToProps
//me permite recibir el valor como propiedad del store
const mapStateToProps = (value) =>{
  return {
    counter: value
  }
};


//Me permite utilizar los metodos como propiedades y
//lanzarlos como un dispatcher
//param una funcion dispatch y retorna las funciones como props
//para ser utlizadas
const mapDispatchToProps =(dispatch) => {
  return{
      onIncrement: () => dispatch(increment()),
      onDecrement: () => dispatch(decrement())
  }
};


//para conectarlo al store con connect
//connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps) (App);
