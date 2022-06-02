import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [posts, setPosts] = useState([
    ({
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Ana',
      fotoUsuario: 'https://picsum.photos/50/49',
      fotoPost: 'https://picsum.photos/200/149'
    },
    {
      nomeUsuario: 'Lucy',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151'
    })
  ]);

  const listaDePosts = posts.map(post => {
    return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    );
  });

  return <MainContainer>{listaDePosts}</MainContainer>;
}

export default App;
