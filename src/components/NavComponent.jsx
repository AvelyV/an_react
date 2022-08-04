import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import './../style/nav.css';

export default function NavComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {' '}
            <img
              alt="logo"
              src="/logo.png"
              // width="160"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/portfoolio" className="navLink">
                Portfoolio
              </Link>
              <Link to="/hinnakiri" className="navLink">
                Hinnakiri
              </Link>
              {/* <Link to="/hinnad" className="navLink">
                Hinnad
              </Link> */}
              <Link to="/fotograafist" className="navLink">
                Fotograafist
              </Link>
              <Link to="/kontakt" className="navLink">
                Kontakt
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
