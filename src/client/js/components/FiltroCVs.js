import React from 'react';
import request from 'superagent';
import {Link, NavLink} from 'react-router-dom';


export default class FiltroCVs extends React.Component{
  componentWillMount () {
    request
      .get('/api/cvs')
      .then(data => {
        this.setState({
          cvs:data.body
        })
      })
  }
  constructor(){
    super();

    this.state={
      cvs:[],
      visibleType: 'all'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(val){
    this.setState({
      visibleType: val
    })
  }
  render(){
    let cv= this.state.cvs
    let filter = cv.filter(element => {
        if (this.state.visibleType === 'all') {return true}
        if (this.state.visibleType === 'true'  &&  element.entrevistado === 1){ return true}
        if (this.state.visibleType === 'false'  &&  element.entrevistado === 0) {return true}
    })
    .map(function (element) {
      let idCV = "/dynamic/" + element.id
      let idInterview = "/interview/" + element.id
        if (element.entrevistado === 1) {
          return(
            <tr key={element.id}>
              <td>{element.nombres.toUpperCase() + ' ' + element.apellidos.toUpperCase()}</td>
              <td>{element.tituloAdquirido}</td>
              <td><Link to={idCV}><i className="large material-icons">star</i></Link></td>
            </tr>
          )
        }
        if (element.entrevistado === 0) {
          return(
            <tr key={element.id}>
              <td>{element.nombres.toUpperCase() + ' ' + element.apellidos.toUpperCase()}</td>
              <td>{element.tituloAdquirido}</td>
              <td><Link to={idInterview}><i className="large material-icons">star_border</i></Link></td>
            </tr>
          )
        }
    })
    return(
      <div className="filtros">
        <div className="ftrs">
          <button className="btn blue darken-3" onClick="Materialize.showStaggeredList('#staggered-test')" onClick={ ()=>{this.handleClick('all') } }>Todos los CVs</button>
          <button className="btn blue darken-3" onClick="Materialize.showStaggeredList('#staggered-test')" onClick= { ()=>{this.handleClick('true') } }>CVs entrevistados</button>
          <button className="btn blue darken-3" onClick="Materialize.showStaggeredList('#staggered-test')" onClick= { ()=>{this.handleClick('false') } }>CVs para entrevista</button>
        </div>
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
              {filter}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
