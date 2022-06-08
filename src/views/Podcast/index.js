import React from 'react';
import useFetchPodcastData from 'src/hooks/useFetchPodcastData';

import './styles.scss';

const Podcast = () => {
  const {
    data,
    loading,
  } = useFetchPodcastData('/episode/all');
  return (
    <>
      {
        loading ? (
          <div className="dot-container">
            <div className="dot-spin--blue" />
          </div>
        ) : (
          data.episodes.map((episode) => (
            <h2 className="title text-primary-blue">{episode.title}</h2>
          ))
        )
      }
    </>
  );
};

export default Podcast;
