import Reflux from 'reflux';
import * as HTTP from '../services/http';

//Importamos Actions
import Actions from '../actions/Actions';

class AppStore extends Reflux.Store{
  constructor(){
    super();

    //escuchadores
    //Este store escucha a las acciones del archivo Actions
    //Esta escuchando para reaccionar a un evento
    this.listenables = Actions;

    this.state = {
      count:0
    };

  }

  addOne(){
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  minuOne(){
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount
    });
  }




}

export default AppStore;
