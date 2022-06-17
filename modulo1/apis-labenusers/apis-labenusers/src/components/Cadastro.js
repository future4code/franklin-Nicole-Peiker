import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  // const [user, setUser] = useState({});

  const handleInputName = e => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  const handleInputEmail = e => {
    e.preventDefault();
    setInputEmail(e.target.value);
  };

  const createUser = e => {
    e.preventDefault();
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: { Authorization: 'nicole-peiker-franklin' }
        },
        { name: inputName, email: inputEmail }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error.message));
  };

  return (
    <form>
      <input onChange={handleInputName} value={inputName} placeholder="Nome" />
      <input
        onChange={handleInputEmail}
        value={inputEmail}
        placeholder="Email"
      />
      <button onClick={createUser}>Cadastrar usuário</button>
    </form>
  );
}

export { Cadastro };
