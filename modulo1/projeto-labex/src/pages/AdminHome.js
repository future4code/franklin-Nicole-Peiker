import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { goToCreateTrip } from '../routes/coordinator';

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
  width: 100%;
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
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then(res => setList(res.data.trips))
      .catch(error => console.log(error));
  };
  useEffect(getTrips, []);

  const deleteItem = id => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          ContentType: 'application/json',
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k'
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
      <h1> Proximas Viagens</h1>
      <List>
        {list.map(item => {
          return (
            <Item key={item.id} onClick={''}>
              {item.name}
              <TrashBtn onClick={() => deleteItem(item.id)}>
                <Image src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
              </TrashBtn>
            </Item>
          );
        })}
      </List>
      <BtnLarge
        name="Cadastrar viagem"
        click={() => goToCreateTrip(navigate)}
      />
    </Container>
  );
};

export { AdminHome };
