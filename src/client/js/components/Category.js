import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import request from 'superagent';
import ReactDOM from 'react-dom';



export default class Category extends React.Component{
  componentWillMount(){
    request
      .get('/api/category')
      .then(data => {
        this.setState({
          categories: data.body
        })
      })
  }
  constructor(){
    super();
    this.state={
      categories:[],
      visibleCat: ''
    }
    this.Clicked = this.Clicked.bind(this)
  }

  Clicked(val){
    this.setState({
      visibleCat: val
    })
  }

  render(){
    let category = this.state.categories

    console.log(this.state.visibleCat);

    let filter = category.filter(element => {
      if (this.state.visibleCat === element.id) {
        return true
      }
    })
    .map(element => {
      let p = element.curriculums
      let o = p.map(element => {
        return element.nombres
      })
      console.log(o);
    })





    let filtroCategory = category.map( (element)=>{
      let idCategory = "/categories/" + element.id
      return(
        <button key={element.id} onClick={ ()=>{ this.Clicked(element.id) } } className="waves-effect waves-light blue darken-2 btn">{element.categorias.toUpperCase()}</button>
      )
    })

    return(
      <div className = "categories">
        <div className="btn-category">
          <Link to="" className="btn-floating btn-large waves-effect waves-light blue btn " title="GRAFICAS"><i className="material-icons">insert_chart</i></Link>
          <Link to="/newcategory" className="btn-floating btn-large waves-effect waves-light blue btn "title="AGREGAR CATEGORIA"><i className="material-icons">add</i></Link>
        </div>
        <div className="category">
          {filtroCategory}
        </div>
      </div>
    )
  }
}
