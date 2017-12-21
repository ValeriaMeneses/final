import React from 'react';
import request from 'superagent';
import {Link, NavLink} from 'react-router-dom';

export default class CVSolo extends React.Component{
  componentWillMount () {
    request
      .get('/api/cvs')
      .then(data => {
        this.setState({
          cvs: data.body
        })
      })
  }
  constructor(){
    super();

    this.state={
      cvs:[]
    }
  }
  render(){
    let cv = this.state.cvs
    let filtro = cv.filter(element => {
      if (element.entrevistado === 0 || element.entrevistado === false)
       {
        return true
      }
    })
    .map(function (element) {
      let idInterview = "/interview/" + element.id
      return(
        <tr key={element.id}>
          <td>{element.nombres.toUpperCase() + ' ' + element.apellidos.toUpperCase()}</td>
          <td>{element.tituloAdquirido}</td>
          <td><Link to={idInterview}><i className="large material-icons">star_border</i></Link></td>
        </tr>
      )
    })
    return(
      <div className="tabla">
        <h1 className="center">Curriculums para entrevistar</h1>
        <div>
          <table className="highlight">
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th></th>
              </tr>
            </thead>

            <tbody>
              {filtro}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
