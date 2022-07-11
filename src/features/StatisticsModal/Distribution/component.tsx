/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { statisticsSelectors } from '../../../selectors';

function Distribution() {
  const distribution = useSelector(statisticsSelectors.selectDistribution);
  const totalGamesOfWon = distribution.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <div css={distributionStyle}>
      <h1>distribution</h1>
      <table>
        {distribution &&
          distribution.map((value, index) => {
            const percent = Math.floor((value / totalGamesOfWon) * 100);

            return (
              <tr key={index}>
                <td className='times'>{`#${index + 1}`}</td>
                <td css={percentStyle(percent)}>
                  <div>{percent ? <span>{`${percent}%`}</span> : '0%'}</div>
                </td>
                <td className='games'>{value}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

const distributionStyle = css`
  padding-bottom: 10px;

  > h1 {
    margin: 0 auto 10px;
    font-weight: 800;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  > table {
    width: 100%;
    > tr {
      > td {
        font-size: 16px;
      }

      > .times {
        vertical-align: middle;
        margin-bottom: 2px;
      }

      > .games {
        padding-left: 11px;
        font-weight: 700;
        vertical-align: middle;
      }
    }
  }
`;

const percentStyle = (percent: number) => css`
  > div {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 22px;
    padding: 0 10px;
    margin: 2px 0;
    border-radius: 50px;
    background-color: #e7ebf2;
    font-size: 12px;
    font-weight: 700;

    > span {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: ${percent}%;
      height: 100%;
      padding: ${percent === 100 ? '0' : '0 8px'};
      border-radius: 50px;
      background-color: #57ac57;
    }
  }
`;

export default Distribution;
