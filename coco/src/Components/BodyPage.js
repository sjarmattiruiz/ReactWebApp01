import React, { Component } from "react";
import bgimage from'../img/bg.jpg'
import burger from'../img/burger.jpg'
import lomo from'../img/lomo.jpg'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
export default class NavBar extends Component{

    render(){
    return(
    <div className="carru">
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={bgimage}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>Pizzas</h1>
        <p>Nuevas variedades para todos los gustos.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={burger}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h1>Hamburguesas</h1>
        <p>El mejor blend de la provincia.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lomo}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h1>Lomitos</h1>
        <p>Sabores que dejarán marcas en vos.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
        );
    }

}
