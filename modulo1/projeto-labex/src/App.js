import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Router } from './routes/Router';

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Share Tech Mono', monospace;
    letter-spacing: 1px;
    color: #fff;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Background>
        <Router />
      </Background>
    </div>
  );
}

export default App;
