import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BtnDefaut = styled.button`
  border: 1px solid #ffffff;
  background-color: rgba(100, 100, 100, 0.5);
  color: #ffffff;
  height: 5vh;
  padding: 0 20px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const Btn = props => {
  return <BtnDefaut onClick={props.click}>{props.name}</BtnDefaut>;
};

export { Btn };
