import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

constructor(){
  super();
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
