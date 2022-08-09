import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import useFetchData from 'src/hooks/useFetchData';
import { podcast } from 'src/api';

import Accueil from 'src/views/Accueil';

import Podcast from 'src/views/Podcast';
import Episode from 'src/views/Episode';

const Router = () => {
  const { get } = podcast;
  const {
    data,
    loading,
    failed,
  } = useFetchData(get, '/episode/all');
  return (
    <Routes>
      <Route
        path="/"
        element={<Accueil loading={loading} failed={failed} episodes={data.episodes} />}
      />
      <Route
        path="/podcast"
        element={<Podcast />}
      />
      <Route
        path="/podcast/episode/:episodeId"
        element={<Episode />}
      />
    </Routes>
  );
};

export default Router;
