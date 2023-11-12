import React, {  Component} from 'react';
import './App.css';

/*Componentes*/
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectValue : "Mexico",
      legend: "Pais seleccionado: Mexico"
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      selectValue: e.target.value,
      legend: "Pais seleccionado: ".concat(e.target.value)
    });
    console.log(e.target.value);

  }

  render() {
    return (
       <div>
        <select
        onChange={this.onChange}
        value={this.state.selectValue}>
          <option value="Mexico">Mexico</option>
          <option value="EE UU">EE UU</option>
          <option value="Chile">Chile</option>
          <option value="Argentina">Argentina</option>
        </select>
        <label className="App-legend">{this.state.legend}</label>
      </div>
    );
  }
}

export default App;
