import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import Main from './components/Main.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  // Para autentificacion en un futuro
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.loginHandle = this.loginHandle.bind(this);
  }

  loginHandle = () => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={'/'} render={() => (<Login loginHandle={this.loginHandle} />)} />
            <Route exact path={'/main'} render={() => (
              this.state.loggedInStatus === "LOGGED_IN" ? (<Main />) : (<Redirect to="/" />)
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
