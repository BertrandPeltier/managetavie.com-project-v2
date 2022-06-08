import React from 'react';
import useFetchPodcastData from 'src/hooks/useFetchPodcastData';

import PodcastPlaylist from 'src/components/PodcastPlaylist';

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
          <>
            <h1>Podcast</h1>
            <PodcastPlaylist episodes={data.episodes} />
          </>
        )
      }
    </>
  );
};

export default Podcast;
