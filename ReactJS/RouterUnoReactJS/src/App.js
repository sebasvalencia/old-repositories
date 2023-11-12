import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home';
import ContactUs from './views/ContactUs'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  exact path="/:name" component={Home}/>
          <Route path="/contact-us/:phone" component={ContactUs} />
        </div>
      </Router>

    );
  }
}

export default App;
