import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Row, Col, Image, Button, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';
// section1
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import montgolfiere from './montgolfiere.webp';
import cloods from './cloods.webp';
// section2
import checkbox from './checkbox.webp';
import logoMTV from './logo-managetavie.webp';
import vanessaBureau from './vanessa-bureau.webp';
// section3
import abeillePfieuw from './abeille-pfieuw.webp';
import abeilleTrapeze from './abeille-trapeze.webp';
// section4
import montgolfiereWhite from './montgolfiere-white.webp';
import cloodsRight from './cloods-right.webp';

import 'animate.css';
import './styles.scss';

const Accueil = () => {
  // Scroll to section 2
  const section2 = useRef();
  // Scroll to section 5
  const section5 = useRef();
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
                loading="lazy"
                decoding="async"
              />
            </Col>
            <Col className="my-auto">
              <h1 className="section1__main__title text-white text-title mb-5">
                Et si tu commençais<br />à kiffer ton quotidien ?
              </h1>
              <Button
                className="section1__main__action-button text-action text-primary-dark-blue fs-2"
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
          loading="lazy"
          decoding="async"
        />
      </section>
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
      <section ref={section2} className="section2">
        <header className="section2__header" />
        <main className="section2__main">
          <div className="section2__main__part1 bg-secondary-yellow text-primary-dark-blue">
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
                  <li><Image src={checkbox} className="mx-3 mb-3" />Arrête de subir</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Épanouis-toi dans ta boîte ou ton job</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Préserve ton temps libre</li>
                  <li><Image src={checkbox} className="mx-3 mb-3" />Et surtout, garde le sourire</li>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section2__main__part3 bg-secondary-light-blue text-primary-dark-blue">
            <Container>
              <Row className="">
                <Col xs={12} md={6}>
                  <h2 className="text-title">Bienvenue<br />dans l'univers Manage ta Vie</h2>
                  <h3 className="text-quote">Je suis Vanessa Rocherieux</h3>
                  <p className="section2__main__part3__text">
                    Fondatrice de Manage ta Vie, coach, formatrice et sophrologue
                    spécialisée en bien-être Professionnel
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
        <Image
          className="section2__image"
          src={vanessaBureau}
          fluid
          loading="lazy"
          decoding="async"
        />
      </section>
      <section className="section3">
        <header className="section3__header text-primary-dark-blue text-center py-4">
          <h2 className="text-title section3__header__title">Dans la vie</h2>
          <h3 className="text-quote">tu as le choix ...</h3>
        </header>
        <main className="section3__main">
          <Container>
            <Row>
              <Col xs={12} md={4} className="text-primary-dark-blue section3__main__col1">
                <Image
                  className="section3__main__image1"
                  src={abeillePfieuw}
                  fluid
                  loading="lazy"
                  decoding="async"
                />
                <h2 className="text-title">Continuer de ...</h2>
                <ul>
                  <li>Subir ton quotidien.</li>
                  <li>Suffoquer par la charge mentale,<br />les doutes et le stress.</li>
                  <li>Sacrifier ton temps libre et ta vie personnelle.</li>
                  <li>Culpabiliser de te reposer.</li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <Image
                  className="section3__main__image2"
                  src={abeilleTrapeze}
                  fluid
                  loading="lazy"
                  decoding="async"
                />
              </Col>
              <Col xs={12} md={4}>
                <h2 className="text-title text-primary-yellow">Changer</h2>
                <h3 className="text-subtitle text-primary-yellow">pour...</h3>
                <ul>
                  <li className="fw-bold text-primary-dark-blue mb-2">Disposer de ton temps<br /><span className="fw-normal">et ne plus te laisser submerger</span></li>
                  <li className="fw-bold text-primary-dark-blue mb-2">Sculpter ton quotidien<br /><span className="fw-normal">comme tu l’entends</span></li>
                  <li className="fw-bold text-primary-dark-blue mb-2">Remettre de la légèreté<br /><span className="fw-normal">et du plaisir dans ta vie</span></li>
                  <li className="fw-bold text-primary-dark-blue mb-2">Retrouver le sourire</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col className="py-5 text-center">
                <Button
                  className="section3__main__action-button text-action text-primary-dark-blue fs-2"
                  variant="primary-yellow"
                >
                  <Link to="//calendly.com/vanessa-managetavie/seance-de-diagnostic-personnalise">
                    Réserve ta séance diagnostic (0€)
                  </Link>
                </Button>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="bg-primary-blue text-center py-4">
          <h2 className="text-title text-white">Avoir tout pour être heureux ne suffit pas pour l'être</h2>
        </footer>
      </section>
      <section className="section4">
        <header className="py-3" />
        <main className="section4__main bg-primary-light-blue">
          <Container>
            <Row className="py-5">
              <Col xs={12} md={8} className="section4__main__col1">
                <h2 className="text-title text-primary-dark-blue">
                  Bienvenue dans l'écosystème du
                  bien-être pro des entrepreneurs, dirigeants & managers
                </h2>
                <h3 className="text-subtitle text-primary-dark-blue">
                  Tu viens, on monte faire une tour ?
                </h3>
              </Col>
              <Col xs={12} md={4}>
                <Image
                  className="section4__main__image"
                  src={montgolfiereWhite}
                  fluid
                  loading="lazy"
                  decoding="async"
                />
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="section4__footer bg-primary-light-blue py-5">
          <Icon
            className="section4__footer__chevron"
            path={mdiChevronDown}
            size={2}
            aria-label="Scroll to next section"
            onClick={() => scrollToSection(section5)}
          />
          <Image
            className="section4__footer__image"
            src={cloodsRight}
            fluid
            loading="lazy"
            decoding="async"
          />
        </footer>
      </section>
      <section ref={section5} className="section5">
        <header className="section5__header">
          <h2 className="text-title text-primary-dark-blue">
            Les ateliers
          </h2>
          <h3 className="text-subtitle text-primary-dark-blue">
            Prends de la hauteur et trouve des solutions à tes problématiques
          </h3>
        </header>
      </section>
    </div>
  );
};

export default Accueil;
