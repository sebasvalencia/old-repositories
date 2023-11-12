import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Children extends Component{

  constructor(props){
    super(props);

    this.state={
      inputValue : this.props.inputValue
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      inputValue : e.target.inputValue
    })
  }

  escribeHola(){
    this.setState({inputValue: 'Hola, accionado desde el padre'});
  }

//ver cuando vengan nuevas propiedades
  componentWillReceiveProps(nextProps){
    if(nextProps.inputValue != this.state.inputValue){
      this.setState({ inputValue: nextProps.inputValue});
    }
  }


  render(){
    return(

      <div>
        <input
          placeholder="Entrada hijo"
          onChange={this.onChange}
          value={this.state.inputValue} />
        <button onClick={(e) => {this.props.muestraAlerta(e, 100)}}>Boton hijo</button>
      </div>


    );
  }

}


Children.propTypes ={
  inputValue : PropTypes.string,
  muestraAlerta: PropTypes.func
}

export default Children;
