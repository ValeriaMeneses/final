import React from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Collapsible, CollapsibleItem, Tab, Tabs} from 'react-materialize';


export default class DynamicEntrevistar extends React.Component{
  componentWillMount () {
    request
      .get('/api/cvs/' + this.props.match.params.entrevistar )
      .then(data => {
        this.setState({
          cvs:data.body
        })
      })
  }
  constructor(){
    super();

    this._handleClick = this._handleClick.bind(this);

    this.state={
      cvs:[]
        }
      }
      _handleClick(e){
        e.preventDefault();
        console.log(e);
        if (this.refs.trabajoEquipo.value !==''  &&  this.refs.liderazgo.value !== ''  && this.refs.conocimientoTecnico.value !== ''  &&  this.refs.facilidadComunicacion.value !== ''  &&  this.refs.creatividad.value !== ''  &&  this.refs.note.value !== '') {
          request
            .put('/api/cvs/' + this.props.match.params.entrevistar)
            .send({
              note:this.refs.note.value,
              trabajoEquipo:this.refs.trabajoEquipo.value,
              liderazgo:this.refs.liderazgo.value,
              conocimientoTecnico:this.refs.conocimientoTecnico.value,
              facilidadComunicacion:this.refs.facilidadComunicacion.value,
              creatividad:this.refs.creatividad.value,
              entrevistado:1
            })
            .then(newNote => {
              console.log(newNote);
              alert('enviado')
            })
        }else {
          alert('falta algun campo')
        }
      }
    render(){
      let cv= this.state.cvs
      return(
        <div className= "cvsolo">
          <div>
            <h1 className="center">Entrevistando a: <span>{cv.nombres}</span> <span>{cv.apellidos}</span></h1>
          </div>
          <div className="notas">
            <h4 className="center">Escribe aqui tus anotaciones:</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea" ref="note"></textarea>
                  </div>
                </div>
              </form>
              </div>
          </div>
          <div className="contenedor-cv">
            <div className="informacion">
              <Tabs className='tab-demo z-depth-1 blue'>
                <Tab title="Información Básica" className="active">
                  <div className="col s12">
                      <ul className="collapsible" data-collapsible="expandable">
                        <li>
                          <div className="collapsible-header"><i className="material-icons">perm_identity</i>Nombre(s): <span>{cv.nombres}</span> </div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">perm_identity</i>Apellido(s): <span>{cv.apellidos}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">wc</i>Sexo: <span>{cv.sexo}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de nacimiento: <span> {cv.fechaNacimiento}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">person_pin_circle</i>Direccion: <span>{cv.direccion}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">phone</i>Telefono: <span>{cv.telefono}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">email</i>E-mail: <span>{cv.email}</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">filter_list</i>Categoria</div>
                          <div className="collapsible-body"><span>categoria</span></div>
                        </li>
                      </ul>
                  </div>
                </Tab>
                <Tab title="Formación Académica">
                  <div className="col s12">
                    <ul className="collapsible" data-collapsible="expandable">
                      <li>
                        <div className="collapsible-header"><i className="material-icons">location_city</i>Nombre de la Institución: <span>{cv.nombreInstituto}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">school</i>Titulo adquirido: <span>{cv.tituloAdquirido}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de inicio: <span>{cv.fechaInicioEdu}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de termino: <span>{cv.fechaTerminoEdu}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">school</i>No. de cedula: <span>{cv.cedula}</span></div>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab title="Experiencia Laboral">
                  <div className="col s12">
                    <ul className="collapsible" data-collapsible="expandable">
                      <li>
                        <div className="collapsible-header"><i className="material-icons">assignment_ind</i>Puesto: <span>{cv.puesto}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">transfer_within_a_station</i>Funciones: <span>{cv.funciones}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">domain</i>Empresa: <span>{cv.empresa}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de inicio: <span>{cv.fechaInicioExp}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">date_range</i>Fecha de termino: <span>{cv.fechaTerminoExp}</span></div>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab title="Información Adicional">
                  <div className="col s12">
                    <ul className="collapsible" data-collapsible="expandable">
                      <li>
                        <div className="collapsible-header"><i className="material-icons">insert_drive_file</i>Cursos: <span>{cv.cursos}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">school</i>Seminarios: <span>{cv.seminarios}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">school</i>Diplomados: <span>{cv.diplomados}</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><i className="material-icons">note</i>Otros: <span>{cv.otros}</span></div>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab title="Idiomas">
                  <div id="test-swipe-5" className="col s12">
                    <ul className="collapsible" data-collapsible="expandable">
                      <li>
                        <div className="collapsible-header"><i className="material-icons">record_voice_over</i>Idiomas: <span>{cv.idiomas}</span></div>
                      </li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="habilidades">
              <h5>Habilidades</h5>
              <div>
                <h6>Trabajo en equipo</h6>
                <div>
                  <select className="browser-default" ref="trabajoEquipo">
                    <option value="" disabled selected>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                  </select>
                </div>
              </div>
              <div>
                <h6>Liderazgo</h6>
                <div>
                  <select className="browser-default" ref="liderazgo">
                    <option value="" disabled selected>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div>
                <h6>Conocimiento Tecnico</h6>
                <div>
                  <select className="browser-default" ref="conocimientoTecnico">
                    <option value="" disabled selected>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div>
                <h6>Facilidad de comunicacion</h6>
                <div>
                  <select className="browser-default" ref="facilidadComunicacion">
                    <option value="" disabled selected>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div>
                <h6>Creatividad</h6>
                <div>
                  <select className="browser-default" ref="creatividad">
                    <option value="" disabled selected>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this._handleClick}>Agregar
            <i className="material-icons right">send</i>
          </button>
        </div>
      )
    }
}
