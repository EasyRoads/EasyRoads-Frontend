import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import './style.css';

const Header = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home' id='logo'>
            EasyRoads
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#user-history'>
              <img src={profile} alt=' ' className='user-profile' />
            </Nav.Link>
            <Nav.Link href='#user'>
              <img src={profile} alt=' ' className='user-history' />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
