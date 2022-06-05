import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.li`
  display: flex;
  flex-direction: ${props => {
    if (props.posicionamento === 'eu') {
      return 'row-reverse';
    } else if (props.alinhamento === 'outro') {
      return 'row';
    }
  }};

  justify-content: ${props => {
    if (props.alinhamento === 'eu') {
      return 'right';
    } else if (props.alinhamento === 'outro') {
      return 'left';
    }
  }};
  align-items: start;
  margin: 30px 10px;
`;

const PhotoUser = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #00dd00;
  margin-right: 10px;
  background-image: ${props => {
    if (props.foto === 'eu') {
      return 'url("https://source.unsplash.com/collection/402491/")';
    } else if (props.foto === 'outro') {
      return 'url("https://source.unsplash.com/collection/2445730/")';
    }
  }};

  background-size: cover;
`;

const TextBox = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-right: 10px;
  background-color: ${props => {
    if (props.fundo === 'eu') {
      return '#FFFFFF';
    } else if (props.fundo === 'outro') {
      return '#3D434C';
    }
  }};

  color: ${props => {
    if (props.cor === 'eu') {
      return '#3D434C';
    } else if (props.cor === 'outro') {
      return '#FFFFFF';
    }
  }};
  border-radius: ${props => {
    if (props.borda === 'eu') {
      return ' 20px 0 20px 20px';
    } else if (props.borda === 'outro') {
      return '0 20px 20px 20px';
    }
  }};

  padding: 10px;
  width: 70%;
  font-family: 'Roboto', sans-serif;
`;

const UserName = styled.h4`
  padding: 0, 5px;
  margin-right: 10px;
`;

const TextMsg = styled.p`
  padding: 0, 5px;
  margin: 0;
`;

function Message(props) {
  if (props.nome.toLowerCase() === 'eu') {
    return (
      <MessageBox alinhamento="eu" posicionamento="eu">
        <PhotoUser foto="eu" />
        <TextBox cor="eu" borda="eu" fundo="eu">
          <UserName>{props.nome}:</UserName>
          <TextMsg>{props.conteudo}</TextMsg>
        </TextBox>
      </MessageBox>
    );
  } else {
    return (
      <MessageBox alinhamento="outro" posicionamento="outro">
        <PhotoUser foto="outro" />
        <TextBox cor="outro" borda="outro" fundo="outro">
          <UserName>{props.nome}:</UserName>
          <TextMsg>{props.conteudo}</TextMsg>
        </TextBox>
      </MessageBox>
    );
  }
}

export { Message };
