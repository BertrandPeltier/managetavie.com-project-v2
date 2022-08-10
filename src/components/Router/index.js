import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';

import useFetchData from 'src/hooks/useFetchData';
import { podcast } from 'src/api';

import Accueil from 'src/views/Accueil';
import Podcast from 'src/views/Podcast';
import QuestionRecorder from 'src/views/QuestionRecorder';
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
        element={<Podcast loading={loading} failed={failed} episodes={data.episodes} />}
      />
      <Route
        path="/podcast/recorder"
        element={<QuestionRecorder />}
      />
      <Route
        path="/podcast/episode/:episodeId"
        element={<Episode loading={loading} failed={failed} episodes={data.episodes} />}
      />
      <Route
        path="*"
        element={<Navigate replace to="/" />}
      />
    </Routes>
  );
};

export default Router;
