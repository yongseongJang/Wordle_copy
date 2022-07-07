import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import { history } from './utils/history';

import { App, ErrorBoundary } from './components';

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <Router history={history}>
      <App />
    </Router>
  </ErrorBoundary>,
);
