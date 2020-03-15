import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import Navigation from './Navigation.js';
import Home from './Home.js';
import '../App.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <div className="Main">
                <Navigation />
                <Route exact path="/home" component={Home}/>
            </div>
        </Router> 
    }
}

export default Main;