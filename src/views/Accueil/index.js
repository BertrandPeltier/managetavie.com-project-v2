import React, { useRef } from 'react';

import {
  Container, Row, Col, Image, Button, Navbar, Nav, NavDropdown,
} from 'react-bootstrap/';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import montgolfiere from './montgolfiere.webp';
import cloods from './cloods.webp';
import checkbox from './checkbox.webp';

import 'animate.css';
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
                Que dirais-tu d'être<br />(vraiment) heureux ?
              </h1>
              <Button
                className="section1__main__action-button text-action"
                variant="primary-yellow"
                onClick={() => scrollToSection(sectionRef)}
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
            onClick={() => scrollToSection(sectionRef)}
          />
          <div className="section1__footer__white-stripe" />
        </footer>
        <Image
          className="section1__cloods"
          src={cloods}
        />
      </section>
    </div>
  );
};

export default Accueil;
