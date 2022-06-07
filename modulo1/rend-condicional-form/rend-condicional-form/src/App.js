import React, { useState } from 'react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Fim } from './components/Fim';
import styled from 'styled-components';

const Btn = styled.button`
  margin-top: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  const [etapa, setEtapa] = useState(1);

  const renderEtapa = () => {
    if (etapa === 1) {
      return <Etapa1 />;
    } else if (etapa === 2) {
      return <Etapa2 />;
    } else if (etapa === 3) {
      return <Etapa3 />;
    } else if (etapa === 4) {
      return <Fim />;
    }
  };

  const proximaEtapa = () => {
    if (etapa === 1) {
      setEtapa(2);
    } else if (etapa === 2) {
      setEtapa(3);
    } else if (etapa === 3) {
      setEtapa(4);
    }
  };

  return (
    <MainContainer className="App">
      {renderEtapa()}
      {etapa > 3 ? <div /> : <Btn onClick="proximaEtapa">Próxima etapa</Btn>}
    </MainContainer>
  );
}

export default App;
