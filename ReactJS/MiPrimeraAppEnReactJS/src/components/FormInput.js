import React, {  Component} from 'react';

//PubSub
import PubSub from 'pubsub-js'


class FormInput extends Component{

  constructor(){
    super();

    this.state={
      inputValue : ''
    }

  }

  componentWillMount(){
    this.globalEvent = PubSub.subscribe('GLOBAL_EVENT',
    (topic, value)=>{
      //cuando se lanza el evento global
      console.log(topic, value);
      this.setState({inputValue: value});
    });
  }

  //cuando se va a desmontar el componente se debe unsubscribe
  componentWillUnmount(){
    PubSub.unsubscribe(this.globalEvent);
    console.log("unsubscribe");
  }



  render(){
    return(
      <div>
        <input value={this.state.inputValue}
            onChange={ (e) => {this.setState({inputValue: e.target.value})} }
        />
      </div>
    );
  }
}

export default FormInput;
