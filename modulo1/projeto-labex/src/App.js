import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CreateTrip } from './pages/CreateTrip';

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Background>
        <CreateTrip />
      </Background>
    </div>
  );
}

export default App;
