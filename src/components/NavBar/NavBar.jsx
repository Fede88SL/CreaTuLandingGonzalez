import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/LogoTiendaOnline.png'
import '../NavBar/NavBarStyles.css'

function ColorSchemesExample() {
    return (
      <>
        
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="Logo Lorenzo Indumentaria" /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link  href="#remeras">Remeras</Nav.Link>
              <Nav.Link  href="#pantalones">Pantalones</Nav.Link>
              <Nav.Link  href="#abrigos">Buzos y Camperas</Nav.Link>
              
            </Nav>
            <CartWidget style={{textAligne:'right'}} />
          </Container>
        </Navbar>
  
        <br />
        
      </>
    );
  }

//const NavBar = () => {
 // return (
 //   <div>
  //      
  //      <ul>
  //              <li>Remeras</li>
  //              <li>Pantalones</li>
  //              <li>Buzos y Camperas</li>
  //          </ul>
   //         <CartWidget />
   // </div>
  //)
//}//
//
//export default NavBar;
export default ColorSchemesExample;