import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

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
        { name: inputName, email: inputEmail },
        {
          headers: { Authorization: 'nicole-peiker-franklin' }
        }
      )
      .then(response => {
        console.log(response);
        setInputName('');
        setInputEmail('');
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div>
      <input onChange={handleInputName} value={inputName} placeholder="Nome" />
      <input
        onChange={handleInputEmail}
        value={inputEmail}
        placeholder="Email"
      />
      <button onClick={createUser}>Cadastrar usuário</button>
    </div>
  );
}

export { Cadastro };
