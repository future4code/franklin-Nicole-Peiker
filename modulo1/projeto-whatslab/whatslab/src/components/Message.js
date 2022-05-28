import React from 'react';
import styles from './Message.css';

function Message(props) {
  return (
    <div>
      <h4>{props.nome}</h4>
      <p>{props.conteudo}</p>
    </div>
  );
}

export { Message };
