import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return <nav>
            <div className="nav-wrapper blue-grey darken-1">
                <NavLink className="brand-logo" to="/main">Loud Gaming</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink className="waves-effect waves-light btn" to="/main/home">Inicio</NavLink></li>
                    <li><NavLink className="waves-effect waves-light btn" to="#">Coleccion</NavLink></li>
                    <li><NavLink className="waves-effect waves-light btn" to="#">Requisitos</NavLink></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navigation;