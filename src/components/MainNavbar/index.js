import React from 'react';
import {
  Container, Image, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';

import logoMTV from './logo-managetavie.webp';
import './styles.scss';

const MainNavbar = () => (
  <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white main-navbar">
    <Container>
      <Navbar.Brand href="#home">
        <Image
          className="main-navbar__logo"
          src={logoMTV}
          fluid
          loading="lazy"
          decoding="async"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">La méthode</Nav.Link>
          <NavDropdown title="Accompagnements" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Happy'Culture</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Bee'Zen</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Manage ta Vie en entreprise</Nav.Link>
          <Nav.Link href="#pricing">Contenus inspirants</Nav.Link>
          <Nav.Link href="#pricing">Podcast</Nav.Link>
          <Nav.Link href="#pricing">Ateliers</Nav.Link>
          <Nav.Link href="#pricing">À propos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
