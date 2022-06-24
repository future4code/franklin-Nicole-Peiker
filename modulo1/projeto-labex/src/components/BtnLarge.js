import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BtnStyle = styled.button`
  border: 1px solid #ffffff;
  background-color: rgba(100, 100, 100, 0.5);
  color: #ffffff;
  width: 100%;
  height: 5vh;
  padding: 0 20px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const BtnLarge = props => {
  return <BtnStyle onClick={props.click}>{props.name}</BtnStyle>;
};

export { BtnLarge };
