import React, { useRef } from 'react';

import {
  Container, Row, Col, Image, Button, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import montgolfiere from './montgolfiere.webp';
import cloods from './cloods.webp';
import checkbox from './checkbox.webp';
import logoMTV from './logo-managetavie.webp';

import 'animate.css';
import './styles.scss';

const Accueil = () => {
  // Scroll to
  const section2 = useRef();
  const scrollToSection = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
  };

  return (
    <div className="accueil">
      <section className="section1  bg-primary-blue">
        <Container className="section1__main" as="main">
          <Row xs={1} md={2}>
            <Col>
              <Image
                className="section1__main__logo"
                src={montgolfiere}
                fluid
              />
            </Col>
            <Col className="my-auto">
              <h1 className="section1__main__title text-white text-title">
                Et si tu commençais<br />à kiffer ton quotidien ?
              </h1>
              <Button
                className="section1__main__action-button text-action"
                variant="primary-yellow"
                onClick={() => scrollToSection(section2)}
              >
                Bzzz c'est par ici !
              </Button>
            </Col>
          </Row>
        </Container>
        <footer className="section1__footer">
          <Icon
            className="section1__footer__chevron mb-5"
            path={mdiChevronDown}
            size={2}
            aria-label="Scroll to next section"
            onClick={() => scrollToSection(section2)}
          />
          <div className="section1__footer__white-stripe" />
        </footer>
        <Image
          className="section1__cloods"
          src={cloods}
        />
      </section>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white main-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              className="main-navbar__logo"
              src={logoMTV}
              fluid
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
      <section ref={section2} className="section2">
        <header className="section2__header" />
        <main className="section2__main">
          <div className="section2__main__part1 bg-secondary-yellow">
            <Container>
              <Row className="text-center py-5">
                <h2 className="text-title">Reprends les commandes<br />pour <span className="lighted--white">profitez de ta vie</span></h2>
                <h3 className="text-quote">pas demain, plus tard ou un jour peut-être !</h3>
                <p>
                  grâce à une méthode qui a fait ses preuves sur plus de 150 entrepreneurs,
                  dirigeants et managers.
                </p>
              </Row>
            </Container>
          </div>
          <div className="section2__main__part2 bg-primary-blue">
            <Container>
              <Row className="text-justify py-5 justify-content-center">
                <Col md="auto" as="ul" className="text-title text-white fs-4">
                  <li><Image src={checkbox} className="mx-3 mb-3" />Révèle ton plein potentiel</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Épanouis-toi dans ton job</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Préserve ton temps libre</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Et surtout, garde le sourire</li>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section2__main__part3 bg-secondary-light-blue">
            <Container>
              <Row className="py-5">
                <Col xs={12} md={6}>
                  <h2 className="text-title">Bienvenue<br />dans l'univers Manage ta Vie</h2>
                  <h3 className="text-quote">Je suis Vanessa Rocherieux</h3>
                  <p>
                    Fondatrice de Manage ta Vie, coach, formatrice et sophrologue
                    spécialisée en bien-être Professionnel
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Accueil;
