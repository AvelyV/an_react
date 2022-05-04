import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './../style/nav.css'

export default function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            // width="160"
            height="60"
            className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
        {/* FIXME: collapse not working */}
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Navbar.Text className="mr-auto">
            <Link to="/portfoolio" className="navLink">
              Portfoolio
            </Link>
            <Link to="/hinnakiri" className="navLink">
              Hinnakiri
            </Link>
            <Link to="/fotograafist" className="navLink">
              Fotograafist
            </Link>
            <Link to="/kontakt" className="navLink">
              Kontakt
            </Link>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <p> nav </p>
  )
}