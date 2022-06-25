import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BtnStyle = styled.button`
  border: 1px solid #ffffff;
  background-color: rgba(100, 100, 100, 0.5);
  color: #ffffff;
  width: 49%;
  height: 5vh;
  padding: 0 20px;
  font-family: 'Share Tech Mono', monospace;
  &:hover {
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const DoubleBtn = props => {
  return (
    <BtnContainer>
      <BtnStyle onClick={props.click1}>{props.name1}</BtnStyle>
      <BtnStyle onClick={props.click2}>{props.name2}</BtnStyle>
    </BtnContainer>
  );
};

export { DoubleBtn };
