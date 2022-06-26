import React from 'react';
import styled from 'styled-components';

const BtnStyle = styled.button`
  border: 1px solid #ffffff;
  background-color: rgba(100, 100, 100, 0.5);
  color: #fff;
  width: 100%;
  height: 5vh;
  padding: 0 20px;
  font-family: 'Share Tech Mono', monospace;
  &:hover {
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const BtnLarge = props => {
  return (
    <BtnStyle onClick={props.click} type={props.type}>
      {props.name}
    </BtnStyle>
  );
};

export { BtnLarge };
