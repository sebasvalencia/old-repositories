import React from "react";
import Axios from "axios";

class Form extends React.Component {
  state = {
    userName: ""
  };

  // GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
  
  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.userName);
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({
        userName: ''
    });
  };

  handleOnChange = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github name"
          value={this.state.userName}
          onChange={this.handleOnChange}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
