import React from 'react';
import request from 'superagent';
import {Tab, Tabs} from 'react-materialize';

export default class CVForm extends React.Component{
  constructor(){
    super();

    this.handleClick= this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    console.log(e);
    if(this.refs.nombres.value !== '' &&  this.refs.apellidos.value !== '' && this.refs.sexo.value !== ''  && this.refs.fechaNacimiento.value !== '' && this.refs.direccion.value !== '' && this.refs.telefono.value !=='' && this.refs.email.value !==''){
      request
        .post('/api/cvs')
        .send({
          nombres:this.refs.nombres.value,
          apellidos:this.refs.apellidos.value,
          sexo:this.refs.sexo.value,
          fechaNacimiento:this.refs.fechaNacimiento.value,
          direccion: this.refs.direccion.value,
          telefono: this.refs.telefono.value,
          email: this.refs.email.value,
          nombreInstituto: this.refs.nombreInstituto.value || null,
          tituloAdquirido:this.refs.tituloAdquirido.value || null,
          fechaInicioEdu:this.refs.fechaInicioEdu.value || null,
          fechaTerminoEdu:this.refs.fechaTerminoEdu.value || null,
          cedula:this.refs.cedula.value || null,
          puesto:this.refs.puesto.value || null,
          funciones:this.refs.funciones.value || null,
          empresa:this.refs.empresa.value || null,
          fechaInicioExp:this.refs.fechaInicioExp.value || null,
          fechaTerminoExp:this.refs.fechaTerminoExp.value || null,
          cursos:this.refs.cursos.value || null,
          seminarios:this.refs.seminarios.value || null,
          diplomados:this.refs.diplomados.value || null,
          publicaciones:this.refs.publicaciones.value || null,
          otros:this.refs.otros.value || null,
          idiomas:this.refs.idiomas.value || null,
          entrevistado:0,
          categoryId:this.refs.categoria.value

        })
        .then(newcv =>{
          console.log(newcv);
          alert('enviado')

        })
    }else {
      alert('falta algun campo')
    }

  }

  render(){
    return(
      <div className="cvForm">
        <h1 className="center">Registrar Curriculum Vitae</h1>
        <div className="cv">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Información Básica" className="active">
              <form className="col s12">
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">perm_identity</i>
                    <input type="text" className="validate" ref="nombres"/>
                    <label htmlFor="icon_prefix">Nombre (s)</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">perm_identity</i>
                    <input type="text" className="validate" ref="apellidos"/>
                    <label htmlFor="icon_prefix">Apellidos</label>
                  </div>
                </div>
                <div className="row select padding">
                  <label>Sexo</label>
                  <select className="browser-default" ref="sexo">
                    <option value="" disabled selected >Elige sexo</option>
                    <option value="Female">Femenino</option>
                    <option value="Male">Masculino</option>
                  </select>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input type="text" className="validate" ref="fechaNacimiento" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <label htmlFor="icon_prefix">Fecha de nacimiento yy-mm-dd</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">person_pin_circle</i>
                    <input type="text" className="validate" ref="direccion"/>
                    <label htmlFor="icon_prefix">Direccion</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input type="text" className="validate" ref="telefono"/>
                    <label htmlFor="icon_prefix">Telefono</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input type="email" className="validate" ref="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
                    <label htmlFor="icon_prefix">E-mail</label>
                  </div>
                </div>
                <div className="row select padding">
                  <label>Categoria</label>
                  <select className="browser-default" ref="categoria">
                    <option value="" disabled selected>Elige una opciòn</option>
                    <option value="1">Administracion</option>
                    <option value="2">Contabilidad</option>
                    <option value="3">Ingenieria</option>
                    <option value="4">Informatica</option>
                    <option value="5">Recursos Humanos</option>
                    <option value="6">Ventas</option>
                    <option value="7">Marketing</option>
                    <option value="8">Producción</option>
                    <option value="9">Dirección General</option>
                  </select>
                </div>
              </form>
            </Tab>
            <Tab title="Formación Académica">
              <form className="col s12">
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">location_city</i>
                    <input type="text" className="validate" ref="nombreInstituto"/>
                    <label htmlFor="icon_prefix">Nombre de la Institución</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">school</i>
                    <input type="text" className="validate" ref="tituloAdquirido"/>
                    <label htmlFor="icon_prefix">Titulo adquirido</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input type="text" className="validate" ref="fechaInicioEdu" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <label htmlFor="icon_prefix">Fecha de inicio yyyy-mm-dd</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input type="text" className="validate" ref="fechaTerminoEdu" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <label htmlFor="icon_prefix">Fecha de termino yyyy-mm-dd</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">school</i>
                    <input type="text" className="validate" ref="cedula"/>
                    <label htmlFor="icon_prefix">No. de cedula</label>
                  </div>
                </div>
              </form>
            </Tab>
            <Tab title="Experiencia Laboral">
              <form className="col s12">
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">assignment_ind</i>
                    <input type="text" className="validate" ref="puesto"/>
                    <label htmlFor="icon_prefix">Puesto</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">transfer_within_a_station</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="funciones"></textarea>
                    <label htmlFor="icon_prefix">Funciones</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">domain</i>
                    <input type="text" className="validate" ref="empresa"/>
                    <label htmlFor="icon_prefix">Empresa</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input type="text" className="validate" ref="fechaInicioExp" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <label htmlFor="icon_prefix">Fecha de inicio yyyy-mm-dd</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input type="text" className="validate" ref="fechaTerminoExp" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <label htmlFor="icon_prefix">Fecha de termino yyyy-mm-dd</label>
                  </div>
                </div>
              </form>
            </Tab>
            <Tab title="Información Adicional">
              <form className="col s12">
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">insert_drive_file</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="cursos"></textarea>
                    <label htmlFor="icon_prefix">Cursos</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">school</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="seminarios"></textarea>
                    <label htmlFor="icon_prefix">Seminarios</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">school</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="diplomados"></textarea>
                    <label htmlFor="icon_prefix">Diplomados</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">insert_drive_file</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="publicaciones"></textarea>
                    <label htmlFor="icon_prefix">Publicaciones</label>
                  </div>
                </div>
                <div className="row padding">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">note</i>
                    <textarea id="textarea1" className="materialize-textarea" ref="otros"></textarea>
                    <label htmlFor="icon_prefix">Otros</label>
                  </div>
                </div>
              </form>
            </Tab>
            <Tab title="Idiomas">
              <div className="row padding">
                <div className="input-field col s6">
                  <i className="material-icons prefix">record_voice_over</i>
                  <textarea id="textarea1" className="materialize-textarea" ref="idiomas"></textarea>
                  <label htmlFor="icon_prefix">Idiomas</label>
                </div>
              </div>
            </Tab>
          </Tabs>
          <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action" onClick={this.handleClick}>Registrar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
  }
}
