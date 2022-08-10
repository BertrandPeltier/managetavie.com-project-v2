import React from 'react';
import PropTypes from 'prop-types';

import PodcastPlaylist from 'src/components/PodcastPlaylist';

import './styles.scss';

const Podcast = ({ loading, failed, episodes }) => (
  <>
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
          <PodcastPlaylist episodes={episodes} />
        </>
      )
    }
    {
      failed && (
        <p>Erreur de chargement, veuillez réactualiser la page</p>
      )
    }
  </>
);

Podcast.propTypes = {
  loading: PropTypes.bool,
  failed: PropTypes.bool,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  })),
};

Podcast.defaultProps = {
  loading: true,
  failed: false,
  episodes: [],
};

export default Podcast;
