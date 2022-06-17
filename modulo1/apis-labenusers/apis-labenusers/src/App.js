import React, { useState } from 'react';
import './App.css';
import { Cadastro } from './components/Cadastro';
import { ListaUsuarios } from './components/ListaUsuarios';

function App() {
  const [page, setPage] = useState('cadastro');
  const changePage = () => {
    if (page === 'cadastro') {
      setPage('Lista de usuário');
    } else {
      setPage('cadastro');
    }
  };

  return (
    <div className="App">
      <button onClick={changePage}>Trocar de Pagina</button>
      {page === 'cadastro' ? <Cadastro /> : <ListaUsuarios />}
    </div>
  );
}

export default App;
