/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Key } from './Key';

function Keyboard() {
  const keyList1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keyList2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keyList3 = ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete'];

  return (
    <div css={keyboardStyle}>
      <div>
        {keyList1.map((key, index) => {
          return (
            <Key
              key={key}
              text={key}
              isLastKey={keyList1.length - 1 === index}
            />
          );
        })}
      </div>
      <div>
        <div css={spaceStyle} />
        {keyList2.map((key, index) => {
          return (
            <Key
              key={key}
              text={key}
              isLastKey={keyList2.length - 1 === index}
            />
          );
        })}
        <div css={spaceStyle} />
      </div>
      <div>
        {keyList3.map((key, index) => {
          return (
            <Key
              key={key}
              text={key}
              isLastKey={keyList3.length - 1 === index}
            />
          );
        })}
      </div>
    </div>
  );
}

const keyboardStyle = css`
  width: 480px;
  height: 200px;
  margin: 0 8px;

  > div {
    display: flex;
    width: 100%;
    margin: 0 auto 8px;
  }
`;

const spaceStyle = css`
  flex: 0.5;
`;

export default Keyboard;
