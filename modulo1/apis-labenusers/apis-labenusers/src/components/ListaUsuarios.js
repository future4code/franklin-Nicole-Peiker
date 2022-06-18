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

  const removeUser = id => {
    // axios
    //   .delete(
    //     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`,
    //     {
    //       params: { id: id },
    //       headers: { Authorization: 'nicole-peiker-franklin' }
    //     }
    //   )
    //   .then(response => {
    //     alert(`${id} deletado com sucesso`);
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error.message));
  };

  const showUserList = userList.map(user => {
    return (
      <div>
        <li key={user.id}>
          {user.name}
          <button onClick={() => removeUser(user.id)}>Excluir</button>
        </li>
      </div>
    );
  });

  console.log(userList);
  return (
    <div>
      {showUserList}
      <input onChange={handleInputName} value={inputName} placeholder="Nome" />
      <button onClick="">Buscar</button>
    </div>
  );
}

export { ListaUsuarios };
