import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class TablaFiltros extends React.Component{
  render(){
    return(
      <div className="tabla">
        <table className="highlight">
          <thead>
            <tr>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Entrevistado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Valeria Meneses</td>
              <td>Ingenieria</td>
              <td><Link to="#"><i className="large material-icons">star</i></Link></td>
            </tr>
            <tr>
              <td>Oscar Aguilar</td>
              <td>Administrativo</td>
              <td><i className="large material-icons">star_border</i></td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td><i className="large material-icons">star</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
