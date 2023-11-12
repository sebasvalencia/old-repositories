import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Children from './components/Children';
import Form from './components/Form';

//PubSub
import PubSub from 'pubsub-js'



class App extends Component {

  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }

  //cuando de click va a emitir un evento
  //para emitir un evento
  onClick(e){

    //Metodo propio q publica un evento generico
    //se lanza y el componente q lo reciba lo accede
    PubSub.publish('GLOBAL_EVENT', true);

  }

  render() {
    return (
       <div>
          <h4>Componente 1</h4>
          <button onClick={this.onClick}>Lanzar evento</button>
          <Form />
      </div>
    );
  }
}

export default App;
