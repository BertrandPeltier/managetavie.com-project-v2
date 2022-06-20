import React, { useRef } from 'react';

import {
  Container, Row, Col, Image, Button, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import montgolfiere from './montgolfiere.webp';

import './styles.scss';

const Accueil = () => {
  // Scroll to
  const sectionRef = useRef();
  const scrollToSection = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
  };

  return (
    <div className="accueil">
      <section className="section1">
        <Container>
          <Row className="main" xs={1} md={2}>
            <Col
              className="main__logo"
            >
              <Image
                src={montgolfiere}
                fluid
              />
            </Col>
            <Col
              className="main__title"
            >
              <h1 className="text-white text-title">Que dirais-tu d'être<br />(vraiment) heureux ?</h1>
              <Button
                className="text-action"
                variant="primary-yellow"
                onClick={() => scrollToSection(sectionRef)}
              >
                Bzzz c'est par ici !
              </Button>
            </Col>
          </Row>
          <footer className="footer">
            <Icon
              className="section-one__footer chevron"
              path={mdiChevronDown}
              size={2}
              aria-label="Scroll to next section"
              onClick={() => scrollToSection(sectionRef)}
            />
          </footer>

          {/* <div className="section-one__footer nuage bg-white" /> */}
        </Container>
      </section>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white">
        <Container>
          <Navbar.Brand href="#home">Manage at Vie</Navbar.Brand>
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
              <Nav.Link href="#pricing" onClick={() => console.log(window.scrollY)}>À propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as="section" ref={sectionRef} className="section-two">
        <Row as="div" className="section-two__gutterup" />
        <Row className="bg-secondary-yellow text-center py-3">
          <h1 className="title">Reprends les commandes<br />pour <span className="lighted--white">profitez de ta vie</span></h1>
          <h2>pas demain, plus tard ou un jour peut-être !</h2>
          <p>
            grâce à une méthode qui a fait ses preuves sur plus de 150 entrepreneurs,
            dirigeants et managers.
          </p>
        </Row>
      </Container>
      <Container as="section" className="section-three">
        <h1>Section 3</h1>
      </Container>
    </div>
  );
};

export default Accueil;
