import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from 'src/components/Main';

const rootReactElement = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
const target = document.getElementById('root');

render(rootReactElement, target);
