import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Category extends React.Component{
  render(){
    const ruta = this.props.match.params.category;
    console.log(ruta);

    return(
      <Link to="categories/categories" className = "categories">
        <div className="btn-category">
          <Link to="" className="btn-floating btn-large waves-effect waves-light blue btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Graficas"><i className="material-icons">insert_chart</i></Link>
          <Link to="/newcategory" className="btn-floating btn-large waves-effect waves-light blue btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Agregar Categoria"><i className="material-icons">add</i></Link>
        </div>
        <div className="category">
          <Link to="/categories/administrativos" className="waves-effect waves-light blue darken-2 btn">Administrativos</Link>
          <Link to="/categories/contabilidad" className="waves-effect waves-light blue darken-2 btn">Contabilidad</Link>
          <Link to="/categories/ingenieria" className="waves-effect waves-light blue darken-2 btn">Ingenieria</Link>
          <Link to="/categories/tics" className="waves-effect waves-light blue darken-2 btn">Tecnologias de la informacion</Link>
          <Link to="/categories/rh" className="waves-effect waves-light blue darken-2 btn">Recursos Humanos</Link>
          <Link to="/categories/ventas" className="waves-effect waves-light blue darken-2 btn">Ventas</Link>
          <Link to="/categories/marketing" className="waves-effect waves-light blue darken-2 btn">Marketing</Link>
          <Link to="/categories/produccion" className="waves-effect waves-light blue darken-2 btn">Producción</Link>
          <Link to="/categories/direccion" className="waves-effect waves-light blue darken-2 btn">Dirección General</Link>
        </div>
      </Link>
    )
  }
}
