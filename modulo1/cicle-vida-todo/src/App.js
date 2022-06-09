import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

function App() {
  const [tarefa, setTarefa] = useState([
    {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da tarefa',
      completa: true // Indica se a tarefa está completa (true ou false)
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filtro, setFiltro] = useState('');

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      completa: false
    };
    setTarefa([...tarefa, novaTarefa]);
    setInputValue('');
  };

  // const enviaTarefa = e => {
  //   if (e.key !== 'Enter') return;
  //   else criaTarefa();
  // };

  const selectTarefa = id => {
    // const atualizaTarefa = tarefa.map(tarefa => {
    // if (tarefa.id !== id) {
    //   return tarefa;
    // } else {
    //   tarefa.completa = !tarefa.completa;
    // }
  };

  const onChangeFilter = e => {
    setFiltro(e.target.value);
  };

  const listaFiltrada = tarefa.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa;
      case 'completas':
        return tarefa.completa;
      default:
        return true;
    }
    // if (filtro === 'pendentes') {
    //   return !tarefa.completa;
    // } else if (filtro === 'completas') {
    //   return tarefa.completa;
    // } else {
    //   return true;
    // }
  });

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
              onkeydown=""
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;
