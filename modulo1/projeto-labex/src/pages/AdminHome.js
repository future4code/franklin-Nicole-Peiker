import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { Btn } from '../components/Btn';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import {
  goToCreateTrip,
  goToTripDetails,
  goToLastPage
} from '../routes/coordinator';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { Header } from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  color: #fff;
  height: 100vh;
  width: 100vw;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 40vw;
  height: 100vh;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  background: rgba(255, 255, 255, 0.4);
  color: #000;
  border: 1px solid rgba(255, 255, 255);
`;

const Image = styled.img`
  width: 1rem;
`;

const LittleBtn = styled.button`
  padding: 0 1vw;
  height: 5vh;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    scale: 1.01;
    cursor: pointer;
  }
`;

const DetailsBtn = styled.h2`
  color: black;
  font-size: 25px;
`;

const ItemName = styled.h2`
  color: black;
  font-size: 25px;
`;

const AdminHome = () => {
  useProtectedPage();
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then(res => setList(res.data.trips))
      .catch(error => console.log(error));
  };
  useEffect(getTrips, []);
  const token = localStorage.getItem('token');

  const deleteItem = id => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          ContentType: 'application/json',
          auth: token
        }
      })
      .then(res => {
        console.log(res);
        getTrips();
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <List>
        <h1> Proximas Viagens</h1>
        {list.map(item => {
          return (
            <Item key={item.id}>
              <div>
                <LittleBtn onClick={() => goToTripDetails(navigate, item.id)}>
                  <DetailsBtn>+</DetailsBtn>
                </LittleBtn>
                {item.name}
              </div>
              <LittleBtn onClick={() => deleteItem(item.id)}>
                <Image src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
              </LittleBtn>
            </Item>
          );
        })}
        <BtnLarge
          name="Cadastrar viagem"
          click={() => goToCreateTrip(navigate)}
        />
        <BtnLarge name="Voltar" click={() => goToLastPage(navigate)} />
      </List>
    </Container>
  );
};

export { AdminHome };
