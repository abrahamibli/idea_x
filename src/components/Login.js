import React, { Component } from 'react';
import auth from '../auth.js';
import 'materialize-css/dist/css/materialize.min.css';
import './Login.css';

class Login extends Component {
    //Para autentificacion
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: ""
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ pass: e.target.value });
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col offset-m3">
                    <div className='card blue-grey darken-1'>
                        <div className="card-content">
                            <h5 className="card-title center-align">Loud Gaming</h5>
                            <div className="form-group">
                                <label>Nombre de Usuario</label>
                                <input type="text" className="form-control" onChange={this.handleEmailChange}></input>
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" className="form-control" onChange={this.handlePasswordChange}></input>
                            </div>
                            <div className="card-action">
                                <button className="btn btn-primary" onClick={() => {
                                    auth.login(this.state.email, this.state.pass, () => {
                                        this.props.history.push("/main")
                                    })
                                }}> Iniciar Sesion </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login;