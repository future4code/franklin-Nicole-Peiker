import React, { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import sendIcon from './img/send.svg';
import styled from 'styled-components';

const Lista = styled.ul`
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
  height: 90vh;
`;

const InputBox = styled.form`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  bottom: 0;
  border: 3px solid #fff;
`;

const Contato = styled.input`
  width: 30%;
  padding: 10px;
  border: 1px solid #ebebeb;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #c0c0c0;
`;

const MsgArea = styled.input`
  width: 60%;
  height: 20px;
  padding: 10px 44px 10px 10px;
  border: 1px solid #ebebeb;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #c0c0c0;
`;

const Send = styled.button`
  background-color: #fff;
  width: 10%;
  border: none;
`;

const SendIcon = styled.img`
  height: 30px;
`;

function App() {
  const [chat, setChat] = useState([
    { nome: 'Eu', conteudo: 'Conteudo da mensagem.' },
    {
      nome: 'Rafa',
      conteudo:
        ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]);
  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = e => {
    e.preventDefault();
    const newMessage = {
      nome: inputName,
      conteudo: inputMessage
    };
    setChat([...chat, newMessage]);
    setInputMessage('');
    setInputName('');
  };

  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputMessage = e => {
    setInputMessage(e.target.value);
  };

  const messageList = chat.map(msg => {
    return <Message nome={msg.nome} conteudo={msg.conteudo} />;
  });

  return (
    <div className="App">
      <Lista>{messageList}</Lista>
      <InputBox>
        <Contato
          className="firstInput"
          type="text"
          value={inputName}
          placeholder="Destinatário"
          onChange={handleInputName}
        />
        <MsgArea
          className="secondInput"
          name="secondInput"
          rows="2"
          cols="50"
          value={inputMessage}
          onChange={handleInputMessage}
          placeholder="Escreva aqui sua mensagem"
        />
        <Send className="sendBtn" onClick={sendMessage}>
          <SendIcon src={sendIcon} alt="" />
        </Send>
      </InputBox>
    </div>
  );
}

export default App;
