import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Row, Col, Card,
} from 'react-bootstrap';

import './styles.scss';

const PodcastPlaylist = ({ episodes }) => (
  <Row xs={1} md={3} className="playlist">
    {episodes.map((episode) => (
      <Col key={episode.id} className="item">
        <h3 className="item__timestamp mt-3">Épisode n°{episode.id} du {episode.date}</h3>
        <Link
          to={`/podcast/episode/${episode.id}`}
        >
          <Card
            className="item__card shadow text-center m-3"
          >
            <Card.Img className="item__caption" src={episode.caption} alt={episode.title} />
          </Card>
        </Link>
      </Col>
    ))}
  </Row>
);

PodcastPlaylist.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  })),
};

PodcastPlaylist.defaultProps = {
  episodes: [],
};

export default PodcastPlaylist;
