import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
export default class NavBar extends Component{

    render(){
    return(
        <div className="NavBarComp">
            <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
        <a className="brandText">¡Mamma Mia!</a>
        
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Quienes somos</Nav.Link>
        <Nav.Link href="#pricing">Menú</Nav.Link>
        <a href="#cart"><img className='cartIcon' src='https://cdn-icons-png.flaticon.com/512/263/263142.png' width={40} height={20} /></a>
        <a href="#user"><img className='userAvatar' src='https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1650834140~hmac=0dbb0c5d58ce13da0d5b44aaf21413ee' width={40} height={30} /></a> 
  </Nav>
      </Container>
    </Navbar>
        </div>
        
    );
    }

}
