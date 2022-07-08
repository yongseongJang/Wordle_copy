/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { customWordleSelectors } from '../../../selectors';

function Link() {
  const pathVariable = useSelector(customWordleSelectors.selectPathVariable);

  return (
    <a href={`/game/${pathVariable}`} css={LinkStyle}>
      {pathVariable && `http://localhost:9001/game/${pathVariable}`}
    </a>
  );
}

const LinkStyle = css`
  color: #3a3a3a;
  font-weight: 700;
`;

export default Link;
