import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';


/*
componentWillMount
-- Lo utilizamos para hacer llamadas a una api o db

componentDidMount
-- Lo utilizamos para hacer llamadas despues del rendereo

componentWillUnmount
-- Lo utilizamos cuando un componente se va a desmontar

*/
class App extends Component {

constructor(){
  super();
}

componentWillMount(){
  console.log("Hola, estoy ejecutando el metodo will mount");
}

componentDidMount(){
  console.log("Hola, estoy ejecutando el metodo did mount");
}

componentWillUnmount(){
  console.log("Component will unmount");
}

componentWillReceiveProps(){

}

shouldComponentUpdate(){ //componentShouldUpdate(){

}

componentWillUpdate(){

}


  render() {
    return (
       <div >
       <Image id={1} src=""/>
       <Input id={2} type="text"/>
      </div>
    );
  }
}

//si hago un log aca para acceder a los state
//estamos fuera del scope de donde vive la variable de estado


//Exportamos este Component para q sea usado en otro lado
export default App;
