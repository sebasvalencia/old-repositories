import React, {Component} from 'react';
import '../styles/Home.css';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import Card from '../components/Card';

class Home extends Reflux.Component{

  constructor(){
    super();
    this.state={};
    this.store = AppStore;
    this.storeKeys = ['data'];//va a ser la var de estado q se comparte entre store y home
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers(e){
    console.log("Mostrar usuarios del home");
    Actions.getUsers();

  }

  render(){
    console.log("data", this.state.data);
    let people = this.state.data.map((currentValue, index, array)=>{
      console.log("index", currentValue.id);
      return  (
          <Card
            key={index}
            id={currentValue.id}
            first_name={currentValue.first_name}
            last_name={currentValue.last_name}
            avatar={currentValue.avatar}
          />
        );
    });
    return (
      <div className="Home">
      <div className="Home-header-box">
        <h2 className="Home-header-title">Bienvenido</h2>
        <button onClick={this.showUsers} className="Home-header-button">Mostrar usuarios</button>
      </div>
      <div className="Home-body">
      {people}
      </div>
      </div>
    );
  }

}

export default Home;
