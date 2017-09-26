// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import RootComponent from './components/RootComponent';
import App from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  App,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.querySelector('main')
);
