import React , {Component} from 'react';


class App extends Component{
  constructor(){
    super();
    //manejamos las variables de estado que van a cambiar su valor continuamente
    this.state = {
      text : "Hola Mundo",
      text2 : "Estoy aprendiendo react.js"
    };

    this.onClick = this.onClick.bind(this);

  }

  //Para hacer cambio de estado
  onClick(e){
    this.setState({
      text2: "Ups, el estado ha cambiado"
    })
  }

  render(){
    //Para acceder a una variable de estado usamos {this.state.variable}
    return (
<div>
    <h2 onClick={this.onClick}>{this.state.text}</h2>
    <h4>{this.state.text2}</h4>
</div>
    );
  }
}

export default App;
