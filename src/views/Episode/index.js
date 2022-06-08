import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import useFetchData from 'src/hooks/useFetchData';
import { podcast } from 'src/api';
import PodcastEpisode from 'src/components/PodcastEpisode';

import './styles.scss';

const Episode = () => {
  const { episodeId } = useParams();
  const { get } = podcast;
  const {
    data,
    loading,
    failed,
  } = useFetchData(get, '/episode/all');
  return (
    <>
      {
        loading && (
          <div className="dot-container">
            <div className="dot-spin--blue" />
          </div>
        )
      }
      {
        !loading && !failed && data && (
          <>
            <h1>Podcast n°{episodeId}</h1>
            {
              episodeId === 'last' || data.episodes.find((episode) => episode.id === Number(episodeId)) ? (
                <PodcastEpisode episodes={data.episodes} />
              ) : (
                <Navigate replace to="/podcast" />
              )
            }
          </>
        )
      }
      {
        failed && (
          <h1>ERREUR !!!</h1>
        )
      }
    </>
  );
};

export default Episode;
