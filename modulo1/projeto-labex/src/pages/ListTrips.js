import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  goToLastPage,
  goToApplicationForm,
  goToTripDetails
} from '../routes/coordinator';
import { Btn } from '../components/Btn';
import { BASE_URL } from '../constants/urls';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 3rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 1rem 3rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`;

const SubTitle = styled.h4`
  margin-bottom: 1rem;
`;

const ListTrips = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then(res => setList(res.data.trips))
      .catch(error => console.log(error));
  };
  useEffect(getTrips, []);
  return (
    <div>
      <h1> Proximas Viagens</h1>
      <div>
        <List>
          {list.map(item => {
            return (
              <Item
                key={item.id}
                onClick={() => goToTripDetails(navigate, item.id)}
              >
                <h2>{item.name}</h2>
                <SubTitle>{item.description}</SubTitle>
                <p>Planeta: {item.planet}</p>
                <p>Duração: {item.durationInDays}</p>
                <p>Data: {item.date}</p>
              </Item>
            );
          })}
        </List>
        <BtnContainer>
          <Btn name="Inscreva-se" click={() => goToApplicationForm(navigate)} />
          <Btn name="Voltar" click={() => goToLastPage(navigate)} />
        </BtnContainer>
      </div>
    </div>
  );
};

export { ListTrips };
