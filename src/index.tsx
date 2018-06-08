import * as React from 'react';
import { render } from 'react-dom';

import './styles/global.scss';

import { App } from './components/app';

render(
  <App />,
  document.getElementById('root')
);
