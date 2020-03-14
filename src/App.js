import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login.js';
import Main from './components/Main.js';
import { ProtectedRoute } from './components/protected.route.js';


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
      <Router >
        <div className="app">
          <Switch>
            <Route exact path={"/"} component={Login} />
            <ProtectedRoute exact path={"/main"} component={Main} />
            <Route path={"*"} component={() => "404 Not Found"} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
