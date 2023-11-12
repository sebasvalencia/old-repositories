import React, {Component} from 'react';
import PropsTypes from 'prop-types';


class Header extends Component{

constructor(props){
  super(props);

  this.state = {
    searchVisible: false
  }
}

//toggle visibility when run on the state
showSearch(){
  this.setState({
    searchVisible: !this.state.searchVisible
  });
}

render(){
  //Classes to add to the <input />
  let seearchInputClasses = ["searchInput"];

  //Update the class array if the state is visible
  if(this.state.searchVisible){
    seearchInputClasses.push("active");
  }

  return(
      <div className="header">
        <div className="fa fa-more"></div>

        <span className="title">{this.props.title}</span>

        <input
          type="text"
          className={seearchInputClasses.join(' ')}
          placeholder="Search ..."
        />

        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIncon"></div>

      </div>
    );
  }
}

Header.propsTypes={
  title: PropsTypes.string
}

export default Header;
