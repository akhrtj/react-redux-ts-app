import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { App } from './containers/App';
import { store } from './containers/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
