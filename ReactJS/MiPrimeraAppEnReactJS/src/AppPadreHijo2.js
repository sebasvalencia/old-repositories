import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Children from './components/Children';

class App extends Component {

constructor(){
  super();
  this.comunicaHijo = this.comunicaHijo.bind(this);

  this.state={
    inputChildValue : '10'
  }
}

comunicaHijo(e){
  console.log(e);

  //this.refs.children.escribeHola();

  //enviarlo como propiedades
  this.setState({inputChildValue:"20"});


}

muestraAlerta(e, number){
  alert("El evento " + e + "el number: " + number );
}


  render() {
    return (
       <div>
          <button onClick={this.comunicaHijo}>Comunica al hijo</button>
          <Children
            ref="children"
            inputValue={this.state.inputChildValue}
            muestraAlerta={this.muestraAlerta}
            />
      </div>
    );
  }
}

export default App;
