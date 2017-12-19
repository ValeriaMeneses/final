import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import request from 'superagent';
import { Redirect } from 'react-router-dom';

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });


export default class MenuNav extends React.Component{
  constructor(){
    super();

    this.logOut = this.logOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      visibleCat: ''
    })
  }
  logOut(){
    request
      .get('/auth/logout')
      .then(()=>{
        console.log('logout!');
        this.props.handleLogout();
      })
      .catch(err => console.log(err))
  }
  render(){
    if (this.props.isAuthenticated === false) {

     return <Redirect to='/login' />
    }
      return(
          <nav className="menu">
            <div className="nav-wrapper">
              <Link to="/principalPage" className="brand-logo"><i className="material-icons">import_contacts</i>CVEntrevistado</Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/principalPage" title="Home"><i className="material-icons">home</i></Link></li>
                <li><Link to="/cv-form" title="Agregar CV"><i className="material-icons">description</i></Link></li>
                <li><Link to="/filtros" title="CV's"><i className="material-icons">folder_shared</i></Link></li>
                <li><Link to="/categories/categorias" title="Categorias"><i className="material-icons">filter_list</i></Link></li>
                <li><Link to="/dinamic/cv" title="Entrevista" onClick={this.handleClick}><i className="material-icons">assignment_ind</i></Link></li>
                <li><button title="Cerrar sesion" onClick={this.logOut}><i className="material-icons">lock</i></button></li>
              </ul>
            </div>
          </nav>
      )


  }
}
