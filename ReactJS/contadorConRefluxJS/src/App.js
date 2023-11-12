import React, { Component } from 'react';
import './App.css';
import Reflux from 'reflux';

import AppStore from './store/AppStore';
import Actions from './actions/Actions';

//Reflux.Component hereda del componente propio de react
//Para conectar el App con el store
class App extends Reflux.Component {

  constructor(props){
    super(props);
    this.state={};
    //El Component ya esta conectado al AppStpre
    this.store = AppStore;
    this.storeKeys = ['count'];
  }

  render() {
    console.log("Count: ", this.state.count);
    return (
      <div className="App">
        <h1>Contador</h1>
        <label className="App-label">{this.state.count}</label><br/>
        <div>
          <button onClick={() => { Actions.addOne(); }}>Agregar</button>
          <button onClick={() => { Actions.minuOne(); }}>Restar</button>
        </div>
      </div>
    );
  }
}

export default App;
