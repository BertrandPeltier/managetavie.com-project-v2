import React from 'react';
import {
  Container, Image, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';

import logoMTV from './logo-managetavie.webp';
import './styles.scss';

const MainNavbar = () => (
  <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white main-navbar">
    <Container>
      <Navbar.Brand href="/">
        <Image
          className="main-navbar__logo"
          src={logoMTV}
          fluid
          loading="lazy"
          decoding="async"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          <Nav.Link href="/methode">La méthode</Nav.Link>
          <NavDropdown title="Accompagnements" id="accompagnments-dropdown">
            <NavDropdown.Item href="/accompagnement/happy-culture">Happy'Culture</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/accompagnement/bee-zen">Bee'Zen</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/entreprise">Manage ta Vie en entreprise</Nav.Link>
          <Nav.Link href="/contenus-inspirants">Contenus inspirants</Nav.Link>
          <NavDropdown title="Podcast" id="podcast-dropdown">
            <NavDropdown.Item href="/podcast">Les épidodes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/podcast/recorder">Enregistrer une question</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/ateliers">Ateliers</Nav.Link>
          <Nav.Link href="/a-propos">À propos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
