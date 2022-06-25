import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  color: #fff;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  height: 5vh;
  padding: 0 0 0 1vw;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  border: 1px solid rgba(255, 255, 255);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    scale: 1.01;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 1rem;
`;

const TrashBtn = styled.button`
  padding: 0 1vw;
  height: 5vh;
  border: none;
`;

const AdminHome = () => {
  const [list, setList] = useState(['Inverno em Venus', 'Astro', 'Rolezinho']);

  const deleteItem = id => {};

  return (
    <Container>
      <h1> Proximas Viagens</h1>
      <List>
        {list.map(item => {
          return (
            <Item onClick={''}>
              {item}
              <TrashBtn click={() => deleteItem(item.id)}>
                <Image src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
              </TrashBtn>
            </Item>
          );
        })}
      </List>
      <BtnLarge name="Cadastrar viagem" />
    </Container>
  );
};

export { AdminHome };
