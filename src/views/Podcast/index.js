import React from 'react';
import PropTypes from 'prop-types';

import PodcastPlaylist from 'src/components/PodcastPlaylist';

import './styles.scss';

const Podcast = ({ loading, failed, episodes }) => (
  <>
    {
        loading ? (
          <div className="dot-container">
            <div className="dot-spin--blue" />
          </div>
        ) : (
          <>
            <h1>Podcast</h1>
            <PodcastPlaylist episodes={episodes} />
          </>
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
