import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/LogoTiendaOnline.png'
import { Link } from 'react-router-dom'
import '../NavBar/NavBarStyles.css'

function ColorSchemesExample() {
    return (
      <>
        
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand> <Link to={'/'}><img src={Logo} alt="Logo Lorenzo Indumentaria" /></Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link> <Link to={'/category/remeras'}>Remeras</Link></Nav.Link>
              <Nav.Link> <Link to={'/category/pantalones'}>Pantalones</Link></Nav.Link>
              <Nav.Link> <Link to={'/category/abrigos'}>Buzos y Camperas</Link></Nav.Link>
              
            </Nav>
            <CartWidget style={{textAligne:'right'}} />
          </Container>
        </Navbar>
  
        <br />
        
      </>
    );
  }

export default ColorSchemesExample;