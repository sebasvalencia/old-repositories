import React , {Component} from 'react';
import './App.css';

class App extends Component{

  getBox(number){
    return (
      <div>
        <h2>{"Hola Mundo yo soy la cajita " + number}</h2>
      </div>
    );
  }

  render(){

    return (
      <div>
      {this.getBox(1)}
      {this.getBox(2)}
      </div>
    );
  }
}

export default App;
