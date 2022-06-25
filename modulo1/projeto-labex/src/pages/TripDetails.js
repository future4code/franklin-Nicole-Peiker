import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn } from '../components/Btn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  gap: 1rem;
  box-sizing: border-box;
`;

const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  border: 1px solid ridge;
`;
const Image = styled.img`
  height: 100%;
  border: 1px solid rgba(255, 255, 255);
`;

const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 1rem;
  padding: 0 3rem;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
`;

const Subtitle = styled.h4`
  margin-bottom: 1rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
`;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 1rem 1rem 1rem 3rem;
  letter-spacing: 1px;
`;

const BtnContainer = styled.div`
  display: flex;
  height: 100%;
  align-self: flex-end;
  gap: 0.4rem;
`;

const TripDetails = () => {
  const [list, setList] = useState([
    {
      name: 'Teste',
      age: 20,
      applicationText: 'Quero muuuuuuito ir!!!',
      profession: 'Chefe',
      country: 'Brasil'
    },
    {
      name: 'Teste',
      age: 20,
      applicationText: 'Quero muuuuuuito ir!!!',
      profession: 'Chefe',
      country: 'Brasil'
    },
    {
      name: 'Teste',
      age: 20,
      applicationText: 'Quero muuuuuuito ir!!!',
      profession: 'Chefe',
      country: 'Brasil'
    }
  ]);
  return (
    <Container>
      <ContainerDetails>
        <Image src="https://source.unsplash.com/collection/1112738/" alt="" />
        <Details>
          <h2>Teste</h2>
          <Subtitle>Teste</Subtitle>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </Details>
      </ContainerDetails>
      <List>
        {list.map(item => {
          return (
            <Item onClick={''}>
              <ItemContainer>
                <p>Nome: {item.name}</p>
                <p>Idade: {item.age}</p>
                <p>Texto motivacional: {item.applicationText}</p>
                <p>Profissão: {item.profession}</p>
                <p>Pais: {item.country}</p>
              </ItemContainer>
              <BtnContainer>
                <Btn name="aprovar"></Btn>
                <Btn name="reprovar"></Btn>
              </BtnContainer>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export { TripDetails };
