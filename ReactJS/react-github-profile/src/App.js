import React from "react";
import "./App.css";

import UserForm from "./components/UserForm";

class App extends React.Component {
  state = {
    user: {}
  };

  createUser = user => {
    console.log("createUser App", user);
    this.setState({
      user
    });
    this.props.history.push(`/dashboard/${user.github}`);
    
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">GITHUB PROFILE</header>
        <UserForm createUser={this.createUser} />
      </div>
    );
  }
}

export default App;
