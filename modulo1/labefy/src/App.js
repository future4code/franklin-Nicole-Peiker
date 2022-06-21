import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputNewPlaylist, setInputNewPlaylist] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [trackName, setTrackName] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [trackUrl, setTrackUrl] = useState('');

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
        setPlaylistId('');
        setPlaylistName('');
        getPlaylistTracks();
      })
      .catch(error => console.log(error.message));
  };

  const removePlaylist = (id, name) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: { Authorization: 'nicole-peiker-franklin' }
        }
      )
      .then(response => {
        alert(`${name} deletado com sucesso`);
        getAllPlaylist();
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  const getPlaylistTracks = (id, name) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then(response => {
        setShowPlaylist(response.data.result.tracks);
        setPlaylistName(name);
        setPlaylistId(id);
      })
      .catch(error => console.log(error));
  };

  const handleInputTrackName = e => {
    setTrackName(e.target.value);
  };

  const handleInputTrackArtist = e => {
    setTrackArtist(e.target.value);
  };
  const handleInputTrackUrl = e => {
    setTrackUrl(e.target.value);
  };

  const addTrackToPlaylist = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          name: trackName,
          artist: trackArtist,
          url: trackUrl
        },
        { headers: { Authorization: 'nicole-peiker-franklin' } }
      )
      .then(response => {
        getPlaylistTracks(playlistId, playlistName);
        setTrackName('');
        setTrackArtist('');
        setTrackUrl('');
      })
      .catch(error => console.log(error));
  };

  const renderPlaylistTracks = () => {
    const urlEmbedded = url => {
      const trackRegex =
        /[^https\:\/\/open\.spotify\.com\/track\/](\w*)[$\?]/gim;
      let paramTrack = url.match(trackRegex);
      return `https://open.spotify.com/embed/track/${paramTrack}utm_source=generator&theme=0`;
    };
    return (
      <div>
        <h3>{playlistName}</h3>
        {showPlaylist.map(track => (
          <iframe
            title={track.name}
            src={urlEmbedded(track.url)}
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        ))}

        <div>
          <p>Selecione uma playlist para adicionar suas musicas favoritas</p>
          <input
            value={trackName}
            onChange={handleInputTrackName}
            placeholder="Musica"
          />
          <input
            value={trackArtist}
            onChange={handleInputTrackArtist}
            placeholder="Banda"
          />
          <input
            value={trackUrl}
            onChange={handleInputTrackUrl}
            placeholder="Url"
          />
          <button onClick={addTrackToPlaylist}>Cadastrar</button>
        </div>
      </div>
    );
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
          return (
            <li
              key={playlist.id}
              onClick={() => getPlaylistTracks(playlist.id, playlist.name)}
            >
              {playlist.name}
              <button
                onClick={() => removePlaylist(playlist.id, playlist.name)}
              >
                x
              </button>
            </li>
          );
        })}
      </div>
      <div>{renderPlaylistTracks()}</div>
    </div>
  );
}

export default App;
