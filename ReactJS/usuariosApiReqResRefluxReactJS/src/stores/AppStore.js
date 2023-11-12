import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

class AppStore extends Reflux.Store{

  constructor(){
    super();
    this.listenables = Actions;
    this.state={
      data:[]
    }
  }

  getUsers(){
    console.log("se llama getUsers del appStore");
    const self = this;
    HTTP.get('https://reqres.in/api/users?page=2').then( (response) => {
      console.log("response: ", response);
      self.setState({
        data: response.data
      });
    });
  }

}

export default AppStore;
