import React, { useState } from 'react';
import './SendMessage.css';
//import styled from 'styled-components';
import { Message } from './Message';
import sendIcon from '../img/send.svg';

function SendMessage(props) {
  // const [state, setState] = useState({
  //   inputName: '',
  //   inputMessage: ''
  // });

  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputMessage = e => {
    setInputMessage(e.target.value);
  };
  const onClickToSend = () => {
    <Message nome={inputName} conteudo={inputMessage} />;
    console.log(inputName);
    console.log(inputMessage);
  };

  return (
    <div className="inputBox">
      <input
        className="firstInput"
        type="text"
        value={inputName}
        placeholder={props.texto1}
        onChange={handleInputName}
      />
      <textarea
        className="secondInput"
        name="secondInput"
        rows="2"
        cols="50"
        value={inputMessage}
        onChange={handleInputMessage}
        placeholder={props.texto2}
      />
      <button className="sendBtn" onClick={onClickToSend}>
        <img src={sendIcon} alt="" />
      </button>
    </div>
  );
}

export { SendMessage };
