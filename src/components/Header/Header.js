import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import history from '../../assets/drive-history.png';
import './style.css';

const Header = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home' id='logo'>
            EasyRoads
          </Navbar.Brand>
          <Nav className='me-auto' id='user-icons'>
            <Nav.Link href='#user-history'>
              <img src={history} alt=' ' className='user-profile' />
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
