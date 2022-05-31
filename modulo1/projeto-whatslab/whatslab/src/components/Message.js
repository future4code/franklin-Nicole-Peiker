import React from 'react';
import './Message.css';

function Message(props) {
  return (
    <li className="messageBox">
      <h4>{props.nome}</h4>
      <p>{props.conteudo}</p>
    </li>
  );
}

export { Message };
