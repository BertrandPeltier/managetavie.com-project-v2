import React from 'react';

import { Card } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMicrophoneQuestion, mdiHandPointingRight } from '@mdi/js';

import Widget from './Widget';

import './styles.scss';

const Recorder = () => (
  <Card className="recorder shadow m-auto">
    <Card.Header className="recorder__header">
      <Icon
        className="me-3"
        path={mdiMicrophoneQuestion}
        size={1}
      />
      Laisse-nous un message vocal, et Vanessa y répondra dans un futur épisode.
    </Card.Header>
    <Card.Body className="recorder__body">
      <Widget />
    </Card.Body>
    <Card.Footer className="recorder__footer">
      <Icon
        className="me-3"
        path={mdiHandPointingRight}
        size={1}
      />
      Assure toi que ta question est bien audible et qu'elle ne dépasse pas 90 secondes.
    </Card.Footer>
  </Card>
);

export default Recorder;
