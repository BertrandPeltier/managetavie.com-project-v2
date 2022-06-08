import React from 'react';
import useFetchPodcastData from 'src/hooks/useFetchPodcastData';

import PodcastEpisode from 'src/components/PodcastEpisode';

import './styles.scss';

const Episode = () => {
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
            <PodcastEpisode episodes={data.episodes} />
          </>
        )
      }
    </>
  );
};

export default Episode;
