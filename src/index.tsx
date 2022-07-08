import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Router } from 'react-router-dom';

import { history } from './utils/history';
import rootReducer from './reducers';
import rootSaga from './sagas';

import { App, ErrorBoundary } from './components';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
);
