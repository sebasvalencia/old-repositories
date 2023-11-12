import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Image extends Component {

constructor(){
  super();
  this.onClick = this.onClick.bind(this);
}

 onClick(e){
  //Asi se le accede las props q vienen de otro components
  this.props.onClickChild();
}

  render() {
    return (
      <div>
        <p onClick={this.onClick}>{"id = " + this.props.id}</p>
        <img src={this.props.src} />
      </div>
    );
  }
}

//Es mejor colocarlas
Image.PropTypes = {
  id:PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onClickChild: PropTypes.func.isRequired
}

export default Image;
