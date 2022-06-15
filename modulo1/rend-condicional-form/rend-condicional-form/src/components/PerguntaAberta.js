import React, { useState } from 'react';
import styled from 'styled-components';

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PerguntaAberta = props => {
  return (
    <InputLabel>
      {props.pergunta}
      <input type="text" id={props.nome} />
    </InputLabel>
  );
};

export { PerguntaAberta };
