import React from 'react';
import { Slider, Slide, Modal, Button } from 'react-materialize';
import {Link, NavLink} from 'react-router-dom';



export default class Presentacion extends React.Component{
  render(){
    return(
      <div className="carrusel">
      
        <Slider>
          <Slide
          src="/images/11.jpg"
          title="CVEntrevistado">

          </Slide>
          <Slide
          src="/images/19.jpg"
          title="Optimizar"
          placement="left">
          </Slide>
          <Slide
          src="/images/10.jpg"
          title="Mantener"
          placement="right">

          </Slide>
          <Slide
          src="/images/25.jpg"
          title="Controlar"
          placement="left">

          </Slide>
        </Slider>
      </div>
    )
  }
}
