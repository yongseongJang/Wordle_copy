/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { customWordleActions } from '../../../actions';
import { customWordleSelectors } from '../../../selectors';

function GenerateButton() {
  const dispatch = useDispatch();

  const word = useSelector(customWordleSelectors.selectWord);
  const pathVariable = useSelector(customWordleSelectors.selectPathVariable);

  const handleClick = () => {
    if (word && word.length === 5) {
      dispatch(customWordleActions.generateWordle(word));
    }
  };

  return (
    <>
      {!pathVariable && (
        <div
          css={GenerateButtonStyle(word && word.length === 5)}
          onClick={handleClick}
        >
          <span>Generate Link</span>
        </div>
      )}
    </>
  );
}
const GenerateButtonStyle = (isAvailable: boolean) => css`
  position: relative;
  cursor: ${isAvailable ? 'pointer' : 'not-allowed'};
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  background-color: #ffffff;
  padding: 10px 0 0 0;

  > span {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #1e90ff;
  }
`;
export default GenerateButton;
