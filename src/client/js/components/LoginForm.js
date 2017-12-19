import React from 'react';
import request from 'superagent';
import { Redirect } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import { Slider, Slide, Modal, Button } from 'react-materialize';


export default class LoginForm extends React.Component{
  constructor(){
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.handleAuthentication({
      email:this.refs.email.value,
      password:this.refs.password.value
    })
  }
  render() {
    if (this.props.isAuthenticated === true) {
      return <Redirect to='/principalPage' />
    }
    return (
      <div className="password" >
          <div className="carrusel">

            <Slider>
              <Slide
              src="/images/11.jpg"
              title="CVEntrevistado">
              <i className="material-icons">import_contacts</i>
              </Slide>
              <Slide
              src="/images/19.jpg"
              title="Optimizar"
              placement="left">
              </Slide>
              <Slide
              src="/images/10.jpg"
              title="Mantener"
              placement="right">

              </Slide>
              <Slide
              src="/images/25.jpg"
              title="Controlar"
              placement="left">

              </Slide>
            </Slider>
          </div>
          <form className="col s12">
            <h1>Inicio de sesion</h1><br/><br/><br/>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input type="text" ref = "email" className="validate" />
                <label htmlFor="icon_prefix">e-mail</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" ref="password" className="validate" />
                <label htmlFor="icon_prefix">Contraseña</label>
              </div>
            </div><br/>
            <a className="waves-effect waves-light btn" onClick={this._handleSubmit}>Entrar</a><br/><br/>
            <Link to="/createUser" className="waves-effect waves-light btn"><i className="material-icons right">account_box</i>Registrarse</Link>
          </form>
      </div>
    )
  }
}
