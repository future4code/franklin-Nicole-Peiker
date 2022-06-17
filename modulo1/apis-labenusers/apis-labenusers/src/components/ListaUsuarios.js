import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [inputName, setInputName] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInputName = e => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  const getAllUsers = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => console.log(error.message));
  };
  useEffect(getAllUsers, []);

  const searchUser = () => {};

  const removeUser = () => {
    axios
      .delete(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then()
      .catch(error => console.log(error.message));
  };

  const showUserList = userList.map(user => {
    return (
      <div>
        <li key={user.email}>{user.name}</li>
        <button onClick={removeUser}>Excluir</button>
      </div>
    );
  });
  return (
    <div>
      {showUserList}
      <input onChange={handleInputName} value={inputName} placeholder="Nome" />
      <button onClick={searchUser}>Buscar</button>
    </div>
  );
}

export { ListaUsuarios };
