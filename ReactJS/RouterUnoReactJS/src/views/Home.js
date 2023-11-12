import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component{

  constructor(props){
    super(props);

    this.state ={
      name: this.props.match.params.name
    }

  }

  render(){
    console.log(this.props.match.params.name);
    return(
      <div>
        <h2>{"Bienvenido a casa ".concat(this.state.name)}</h2>
        <Link to={"/contact-us/".concat(123)}><p>Ir a Contact us</p></Link>
      </div>
    );
  }


}

//match es un param q envia el ruteador a los componentes por rutas
//
Home.propTypes={
  match: PropTypes.any
}


export default Home;
