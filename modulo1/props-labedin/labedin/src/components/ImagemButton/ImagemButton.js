import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;

const Imagem = styled.img`
  width: 30px;
  margin-right: 10px;
`;

function ImagemButton(props) {
  return (
    <ButtonContainer>
      <Imagem src={props.imagem} />
      <p>{props.texto}</p>
    </ButtonContainer>
  );
}

export default ImagemButton;
=======
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;
>>>>>>> 9afb064e9dc2cc22a4f920fb0fe1338e92ad9269
