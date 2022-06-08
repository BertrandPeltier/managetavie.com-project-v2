import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import Podcast from 'src/views/Podcast';

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
  </Routes>
);

export default Router;
