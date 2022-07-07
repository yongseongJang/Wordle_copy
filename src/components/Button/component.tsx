/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style: {
    width?: string;
    height?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
}

function Button(props: ButtonProps) {
  console.log(props);
  return (
    <div css={ButtonStyle(props.style)} onClick={props.onClick}>
      <span>{props.text}</span>
    </div>
  );
}

const ButtonStyle = (style: {
  width?: string;
  height?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
}) => css`
  position: relative;
  cursor: pointer;
  margin: ${style.margin ? style.margin : '0 auto'};
  width: ${style.width ? style.width : 'fit-content'};
  height: ${style.height ? style.height : 'fit-content'};
  background-color: ${style.backgroundColor
    ? style.backgroundColor
    : '#ffffff'};
  ${style.padding && `padding: ${style.padding}`};
  ${style.border && `border: ${style.border}`};
  ${style.borderRadius && `border-radius: ${style.borderRadius}`}
  ${style.boxShadow && `box-shadow: ${style.boxShadow}`}

  > span {
    font-family: ${style.fontFamily ? style.fontFamily : "'Lato', sans-serif"};
    font-size: ${style.fontSize ? style.fontSize : '15px'};
    color: ${style.color ? style.color : '#000000'};
  }
`;

export default Button;
