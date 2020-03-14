import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import Main from './components/Main.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  // Para autentificacion en un futuro
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={'/'} component={Login} />
            <Route exact path={'/main'} component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
