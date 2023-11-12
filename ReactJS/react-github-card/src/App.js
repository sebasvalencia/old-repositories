import React from "react";
import "./App.css";
import CardList from "./CardList";
import Form from "./Form";

class App extends React.Component {
  // testData = [
  //   {
  //     name: "Dan Abramov",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
  //     company: "@facebook"
  //   },
  //   {
  //     name: "Sophie Alpert",
  //     avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
  //     company: "Humu"
  //   },
  //   {
  //     name: "Sebastian Markbåge",
  //     avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
  //     company: "Facebook"
  //   }
  // ];

  state = {
    // profiles: this.testData
    profiles: []
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">The Github Card App</header>

        <Form onSubmit={this.addNewProfile}/>

        <CardList testData={this.state.profiles} />
      </div>
    );
  }
}

export default App;
