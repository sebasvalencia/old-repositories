import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

  constructor(){
    super();
    this.state = {
      inputValue: '',
      legend: ''
    }
    this.onChange = this.onChange.bind(this);
  }

onChange(e){
  this.setState({
    inputValue: e.target.value,
    legend: e.target.value
  });
  console.log(e.target.value);
}


  render() {
    return (
       <div>
       <input
        type="text"
        id="input1"
        value={this.state.inputValue}
        onChange = {this.onChange}
         />
         <label className="App-legend">{this.state.legend}</label>
      </div>
    );
  }
}

export default App;
