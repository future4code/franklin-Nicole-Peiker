import React, { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import sendIcon from './img/send.svg';

function App() {
  const [chat, setChat] = useState([
    { nome: 'Remetente', conteudo: 'Conteudo da mensagem.' },
    {
      nome: 'Outro Remetente',
      conteudo:
        ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]);
  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputMessage = e => {
    setInputMessage(e.target.value);
  };
  const onClickToSend = () => {};
  const messageList = chat.map(message => {
    return <Message nome={chat.nome} conteudo={chat.conteudo} />;
  });

  return (
    <div className="App">
      <ul>
        <Message />
      </ul>
      <form className="inputBox">
        <input
          className="firstInput"
          type="text"
          value={inputName}
          placeholder="Destinatário"
          onChange={handleInputName}
        />
        <textarea
          className="secondInput"
          name="secondInput"
          rows="2"
          cols="50"
          value={inputMessage}
          onChange={handleInputMessage}
          placeholder="Escreva aqui sua mensagem"
        />
        <button className="sendBtn" onClick={onClickToSend}>
          <img src={sendIcon} alt="" />
        </button>
      </form>
    </div>
  );
}

export default App;
