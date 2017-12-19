import React from 'react';
import request from 'superagent';

export default class CreateUser extends React.Component{
  constructor(){
    super();

    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick (e){
    e.preventDefault();
    console.log(e);
    if (this.refs.Nombre.value !== ''  &&  this.refs.Apellidos.value !== ''  &&  this.refs.email.value !== '' &&  this.refs.password.value === this.refs.verificarPassword.value) {
      request
        .post('/auth/register')
        .send({
          Nombre:this.refs.Nombre.value,
          Apellidos:this.refs.Apellidos.value,
          email:this.refs.email.value,
          password:this.refs.password.value
        })
        .then(newUser=>{
          console.log(newUser);
          alert('enviado')
        })
    } else {
      alert('falta algun campo')
    }
  }

  render() {
    return(
      <div className="createUser" >
        <h1 className="center">Registrar Usuario</h1><br/>
          <form className="col s12">
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">perm_identity</i>
                <input type="text" className="validate" ref="Nombre" />
                <label htmlFor="icon_prefix">Nombre (s)</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">perm_identity</i>
                <input type="text" className="validate" ref="Apellidos" />
                <label htmlFor="icon_prefix">Apellidos</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input type="text" className="validate" ref="email"/>
                <label htmlFor="icon_prefix">E-mail</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" ref="password" />
                <label htmlFor="icon_prefix">Contraseña</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input type="password" className="validate" ref="verificarPassword"/>
                <label htmlFor="icon_prefix">Verificar Contraseña</label>
              </div>
            </div><br/>
            <button className="btn waves-effect waves-light" onClick={this._handleClick}>Registrar
              <i className="material-icons right">send</i>
            </button>
          </form>
      </div>
    )
  }
}
