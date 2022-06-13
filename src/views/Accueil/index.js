import React, { useRef } from 'react';

import {
  Container, Row, Col, Button, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';
import './styles.scss';

const Accueil = () => {
  const sectionRef = useRef();
  const scrollToSection = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
  };

  return (
    <div className="accueil">
      <Container className="section-one">
        <Row>
          <Col>Logo</Col>
          <Col>
            <h1 className="text-white title">Que dirais-tu d'être (vraiment) heureux ?</h1>
            <Button
              className="action"
              variant="primary-yellow"
              onClick={() => scrollToSection(sectionRef)}
            >
              Bzzz c'est par ici !
            </Button>
          </Col>
        </Row>
      </Container>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container ref={sectionRef} className="section-two">
        <h1>Section 2</h1>
      </Container>
      <Container className="section-three">
        <h1>Section 3</h1>
      </Container>
    </div>
  );
};

export default Accueil;
