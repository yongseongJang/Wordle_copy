/** @jsxImportSource @emotion/react */
import React from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { css } from '@emotion/react';

import { Spinner } from '../';
import { Error } from '../../pages';

import '../../styles/reset.css';

const Home = lazy(() => import('../../pages/Home/component'));
const Game = lazy(() => import('../../pages/Game/component'));

function App() {
  return (
    <div css={appStyle}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game' component={Game} />
          <Route
            render={() => <Error text={'This url is not accessible.'} />}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

const appStyle = css`
  height: 100%;
`;

export default App;
