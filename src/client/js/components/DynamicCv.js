import React from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Collapsible, CollapsibleItem, Tab, Tabs} from 'react-materialize';

export default class DynamicCv extends React.Component{
  componentWillMount () {
    request
      .get('/api/cvs/' + this.props.match.params.cv )
      .then(data => {
        this.setState({
          cvs:data.body
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

    return (
      <div className="Cventrevistado">
        <h1 className="center titulo">Curriculum Vitae de: <span>{cv.nombres}</span> <span>{cv.apellidos}</span></h1>
        <div className="contenidoCV">
        <div className="informacionCvSolo">
          <h3 className="center">Informacion de CV</h3>
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
          <h3 className="center">Habilidades</h3>
          <table className="highlight">
            <thead>
              <tr>
                  <th>Habilidades</th>
                  <th>Evaluacion</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><span>Trabajo en equipo</span></td>
                <td>{cv.trabajoEquipo}</td>
              </tr>
              <tr>
                <td>Liderazgo</td>
                <td>{cv.liderazgo}</td>
              </tr>
              <tr>
                <td>Conocimiento Tecnico</td>
                <td>{cv.conocimientoTecnico}</td>
              </tr>
              <tr>
                <td>Facilidad de comunicacion</td>
                <td>{cv.facilidadComunicacion}</td>
              </tr>
              <tr>
                <td>Creatividad</td>
                <td>{cv.creatividad}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="notas">
          <h3 className="center">Anotaciones</h3>
          <p>{cv.note}</p>
        </div>
      </div>
    )
  }
}
