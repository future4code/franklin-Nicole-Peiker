import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const Formulario = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Btn = styled.button`
  box-sizing: border-box;
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  color: #fff;
  background-color: black;
  border: none;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [posts, setPosts] = useState([
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Analu',
      fotoUsuario: 'https://picsum.photos/50/49',
      fotoPost: 'https://picsum.photos/200/149'
    },
    {
      nomeUsuario: 'Lucy',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151'
    }
  ]);

  const [inputUsuario, setInputUsuario] = useState('');
  const [inputFotoUsuario, setInputFotoUsuario] = useState('');
  const [inputFotoPost, setInputFotoPost] = useState('');

  const adicionaPost = e => {
    e.preventDefault();
    const novoPost = {
      nomeUsuario: inputUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
    };
    const novosPosts = [...posts, novoPost];
    setPosts(novosPosts);
    setInputUsuario('');
    setInputFotoUsuario('');
    setInputFotoPost('');
  };

  const handleInputUsuario = e => {
    setInputUsuario(e.target.value);
  };

  const handleInputFotoUsuario = e => {
    setInputFotoUsuario(e.target.value);
  };

  const handleInputFotoPost = e => {
    setInputFotoPost(e.target.value);
  };

  const listaDePosts = posts.map(post => {
    return (
      <div>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </div>
    );
  });

  return (
    <div>
      <MainContainer>{listaDePosts}</MainContainer>
      <Formulario>
        <FormInput
          value={inputUsuario}
          onChange={handleInputUsuario}
          placeholder="Usario"
        />
        <FormInput
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
          placeholder="Insira a imagem de Usuario"
        />
        <FormInput
          value={inputFotoPost}
          onChange={handleInputFotoPost}
          placeholder="Insira a imagem que deseja postar"
        />
        <Btn onClick={adicionaPost}>Postar</Btn>
      </Formulario>
    </div>
  );
}

export default App;
