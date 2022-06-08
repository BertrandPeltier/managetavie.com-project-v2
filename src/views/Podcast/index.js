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
          <h1 className="title text-associate-red">LOADING</h1>
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
