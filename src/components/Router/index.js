import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import Podcast from 'src/views/Podcast';
import Episode from 'src/views/Episode';

const Router = () => (
  <Routes>
    <Route
      path="/"
      element=""
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

export default Router;
