import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
        <div>
            <h1>
                <Link to="/">Reduxstragram</Link>
            </h1>
            {
                //Past all the props to the children of Main component
                React.cloneElement(this.props.children, this.props)
            }
        </div>
    );
  }
});

export default Main;
