import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactUs extends Component{

  constructor(props){
    super(props);

    this.state={
      phone: this.props.match.params.phone
    }

  }

  render(){
    return(
      <div>
        <h2>{"Gracias por contactarnos ".concat(this.state.phone)}</h2>
        <Link to ="/paramB"><p>Regresar a home</p></Link>
      </div>
    );
  }


}

ContactUs.propTypes={
  match: PropTypes.any
}

export default ContactUs;
