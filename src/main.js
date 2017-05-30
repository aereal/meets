// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootComponent from './components/RootComponent';
import App from './reducers';

ReactDOM.render(
  <Provider store={createStore(App)}>
    <RootComponent />
  </Provider>,
  document.querySelector('main')
);
