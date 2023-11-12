import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {


  constructor(){
    super();

    this.state = {
      legend : "0"
    }

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event){
    let legend ="";
    if(event.target.id === "boton1"){
      console.log(1);
      legend = "Boton 1 clickeado";
    }else if (event.target.id === "boton2") {
      console.log(2);
      legend= "Boton 2 clickeado";
    }else if (event.target.id === "boton3") {
      console.log(3);
      legend= "Boton 3 clickeado";
    }
    this.setState({legend: legend});
  }

  render() {
    return (
       <div >
        <button id="boton1" onClick={this.onClickButton}>Boton 1
        </button>
        <button id="boton2" onClick={this.onClickButton}>Boton 2
        </button>
        <button id="boton3" onClick={this.onClickButton}>Boton 3
        </button>
        <label className="App-legend">{this.state.legend}</label>
      </div>
    );
  }
}

export default App;
