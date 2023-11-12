import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

constructor(){
  super();


this.state = {
  inputType : "text"
}

  //Para agarrar el contexto,
  // se lo puedo pasar como propiedad al componente hijo
  this.onClickChild = this.onClickChild.bind(this);
}

onClickChild(e){
  alert(20);
  //Cuando el image lance este evento el padre
  // le setea a Input el tipo number, ya no seria text
  this.setState({inputType:"number"});
}

  render() {
    return (
       <div >
       <Image id={1} src="" onClickChild={this.onClickChild}/>
       <Input id={2} type={this.state.inputType} />
      </div>
    );
  }
}

//si hago un log aca para acceder a los state
//estamos fuera del scope de donde vive la variable de estado


//Exportamos este Component para q sea usado en otro lado
export default App;
