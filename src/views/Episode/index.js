import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Navigate } from 'react-router-dom';

import {
  Container,
} from 'react-bootstrap/';
import MainNavbar from 'src/components/MainNavbar';
import PodcastEpisode from 'src/components/PodcastEpisode';

import './styles.scss';

const Episode = ({ loading, failed, episodes }) => {
  const { episodeId } = useParams();
  return (
    <div className="episode-view">
      <MainNavbar />
      <Container>
        {
          loading && (
            <div className="dot-container">
              <div className="dot-spin--blue" />
            </div>
          )
        }
        {
          !loading && !failed && episodes && (
            <>
              {
                episodeId === 'last' || episodes.find((episode) => episode.id === Number(episodeId)) ? (
                  <PodcastEpisode episodes={episodes} />
                ) : (
                  <Navigate replace to="/podcast" />
                )
              }
            </>
          )
        }
        {
          failed && (
            <p>Erreur de chargement, veuillez réactualiser la page</p>
          )
        }
      </Container>
    </div>
  );
};

Episode.propTypes = {
  loading: PropTypes.bool,
  failed: PropTypes.bool,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  })),
};

Episode.defaultProps = {
  loading: true,
  failed: false,
  episodes: [],
};

export default Episode;
