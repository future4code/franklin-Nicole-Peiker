import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  height: 50px;
`;

const Imagem = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Titulo = styled.h4`
  margin-right: 10px;
`;

function CardPequeno(props) {
  return (
    <SmallCard>
      <Imagem src={props.imagem} />
      <h4>{props.nome}</h4>
      <p>{props.descricao}</p>
    </SmallCard>
  );
}

export default CardPequeno;
