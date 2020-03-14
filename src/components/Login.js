import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './Login.css';

class Login extends Component {
    //Para autentificacion
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col offset-m3">
                    <div className='card blue-grey darken-1'>
                        <div class="card-content">
                            <h5 class="card-title center-align">Loud Gaming</h5>
                            <div className="form-group">
                                <label>Nombre de Usuario</label>
                                <input type="text" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" className="form-control"></input>
                            </div>
                            <div className="card-action">
                                <Link to="/main" class="btn btn-primary">Iniciar Sesion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login;