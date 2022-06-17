import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputNewPlaylist, setInputNewPlaylist] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const handleInputNewPlaylist = e => {
    setInputNewPlaylist(e.target.value);
  };

  const createPlaylist = () => {
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          name: inputNewPlaylist
        },
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then(response => {
        console.log(response);
        alert(`A playlist ${inputNewPlaylist} foi criada com sucesso`);
        getAllPlaylist();
        setInputNewPlaylist('');
      })
      .catch(error => console.log(error.message));
  };

  const getAllPlaylist = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then(response => {
        setPlaylist(response.data.result.list);
      })
      .catch(error => console.log(error.message));
  };

  useEffect(getAllPlaylist, []);

  return (
    <div className="App">
      <div>
        <input
          onChange={handleInputNewPlaylist}
          value={inputNewPlaylist}
          placeholder="Nome da Lista"
        />
        <button onClick={createPlaylist}>Criar playlist</button>
      </div>
      <div>
        <h3>Minhas playlists</h3>
        {playlist.map(playlist => {
          return <li key={playlist.id}>{playlist.name}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
