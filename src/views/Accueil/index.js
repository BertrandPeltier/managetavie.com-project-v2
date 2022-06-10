import React, { useRef } from 'react';

import {
  Container, Row, Col, Button
} from 'react-bootstrap/';
import './styles.scss';

const Accueil = () => {
  const myRef = useRef();

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
              // onClick={scrollToSection(myRef)}
              onClick={() => window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })}
            >
              Bzzz c'est par ici !
            </Button>
          </Col>
        </Row>
      </Container>
      <Container ref={myRef} className="section-two">
        <h1>Menu</h1>
      </Container>
    </div>
    // <div className="container">
    //   <h1>Accueil</h1>
    //   <div className="container__one">
    //     <h1
    //       onClick={() => window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })}
    //     >
    //       One
    //     </h1>
    //   </div>
    //   <div ref={myRef} className="container__two">
    //     <h1>Two</h1>
    //   </div>
    // </div>
  );
};

export default Accueil;
