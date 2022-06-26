import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=1380&t=st=1656267266~exp=1656267866~hmac=485b123668a97e7047d2a378a921d3542359afd68e73ec714c503b619cfa71c0');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error = () => {
  return (
    <div>
      <Background></Background>
    </div>
  );
};

export { Error };
