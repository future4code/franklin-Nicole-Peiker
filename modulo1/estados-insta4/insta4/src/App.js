import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      <Post
        nomeUsuario={'Renata'}
        fotoUsuario={
          'https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2572.jpg?w=996&t=st=1654007652~exp=1654008252~hmac=b73ef2dabe7899edd5406f01ba34c4769b2072b81019853ec1a743f75e09604d'
        }
        fotoPost={
          'https://img.freepik.com/fotos-gratis/mulher-na-ponta-da-piedade-um-local-pitoresco-em-portugal_181624-35807.jpg?t=st=1654007298~exp=1654007898~hmac=6ee01e7ada95d94dfab7959be577ca41b521aa0c8d6276b91386e86cda3bc786&w=900'
        }
      />
      <Post
        nomeUsuario={'Joana'}
        fotoUsuario={
          'https://img.freepik.com/fotos-gratis/agradavel-jovem-alegre-morena-de-cabelos-cacheados-jogando-a-cabeca-para-tras-enquanto-ria-alegremente-com-os-olhos-fechados-em-pe-sobre-a-parede-azul-com-as-maos-para-baixo_295783-11256.jpg?t=st=1654004949~exp=1654005549~hmac=18704237b7d2ffb26b8ea590057c3f93e349be8744f364e4ad6516b0279a79db&w=996'
        }
        fotoPost={
          'https://img.freepik.com/fotos-gratis/ruas-limpas-da-cidade-de-praga_23-2149417757.jpg?t=st=1654007346~exp=1654007946~hmac=2a1f5d931ba079592cffd73ee43700318df4fe9c3f931ebefaa5aa9a3ab4350d&w=360'
        }
      />
    </MainContainer>
  );
}

export default App;
