import React from 'react';
import {
  Container,
} from 'react-bootstrap/';
import MainNavbar from 'src/components/MainNavbar';
import Recorder from 'src/components/Recorder';

import './styles.scss';

const QuestionRecorder = () => (
  <div className="question-recorder-view">
    <MainNavbar />
    <Container>
      <Recorder />
    </Container>
  </div>
);

export default QuestionRecorder;
