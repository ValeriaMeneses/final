import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default class PrincipalPage extends React.Component{
  render(){
    return(
      <div className="principalPage ">
        <div className="cvs col s4">
          <Link to="/filtros" className="waves-effect " type="submit" name="action">
            <i className="material-icons">folder_shared</i>
            <br/>
            Curriculums Vitae
          </Link>
        </div>
        <div className="categorias col s4">
          <Link to="/categories" className="waves-effect " type="submit" name="action">
            <i className="material-icons">filter_list</i>
            <br/>
            Categorias
          </Link>
        </div>
        <div className="entrevista col s4">
          <Link to="/dinamic/cv" className="waves-effect " type="submit" name="action">
            <i className="material-icons">assignment_ind</i>
            <br/>
            Entrevista
          </Link>
        </div>
      </div>
    )
  }
}
