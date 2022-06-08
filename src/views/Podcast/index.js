import React from 'react';
import useFetchData from 'src/hooks/useFetchData';
import { podcast } from 'src/api';

import PodcastPlaylist from 'src/components/PodcastPlaylist';

import './styles.scss';

const Podcast = () => {
  const { get } = podcast;
  const {
    data,
    loading,
    failed,
  } = useFetchData(get, '/episode/all');
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
