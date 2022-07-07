/** @jsxImportSource @emotion/react */
import React from 'react';
import { useCallback } from 'react';
import { css } from '@emotion/react';

import { history } from '../../utils/history';

import { Button } from '../../components';

interface ErrorProps {
  text: string;
}

function Error(props: ErrorProps) {
  const handleClick = useCallback(() => {
    history.replace('/');
  }, []);

  return (
    <div css={ErrorStyle}>
      <div>
        <h1>Wordle</h1>
        <h3>{props.text}</h3>
        <Button
          text={'go to home page'}
          onClick={handleClick}
          style={{ fontSize: '15px' }}
        />
      </div>
    </div>
  );
}

const ErrorStyle = css`
  display: flex;
  justify-content: center;
  height: 100%;

  > div {
    margin: auto 0;

    > h1 {
      font-family: 'Lobster', cursive;
      font-weight: 700;
      font-size: 100px;
      text-align: center;
    }

    > h3 {
      font-family: "'Lato', sans-serif";
      font-weight: 300;
      font-size: 30px;
      text-align: center;
      padding: 15px 0;
    }
  }
`;

export default Error;
