import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { BiUserCircle ,BiHistory } from 'react-icons/bi';
import './style.css'

const Header = () => {
return(
  <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home" id="logo">EasyRoads</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#user-history"><BiHistory className="user-history"/></Nav.Link>
         <Nav.Link href="#user"><BiUserCircle className="user-icon"/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Header;

