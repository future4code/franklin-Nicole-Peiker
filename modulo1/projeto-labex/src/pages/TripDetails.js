import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Btn } from '../components/Btn';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  width: 60vw;
  min-width: 700px;
  gap: 1rem;
  height: 100%;
  min-height: 100vh;
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

const Subtitle = styled.p`
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

const ItemContainer = styled.div`
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
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.id);

  const getTripDetails = () => {
    const token = localStorage.getItem('token');
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token
        }
      })
      .then(res => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch(error => console.log(error));
  };
  useEffect(getTripDetails, []);

  return (
    <Container>
      <ContainerDetails>
        <Image src="https://source.unsplash.com/collection/1112738/" alt="" />
        <Details>
          <h2>{trip.name}</h2>
          <Subtitle>{trip.description}</Subtitle>
          <p>Data de saída: {trip.date}</p>
          <p>Duração da viagem: {trip.durationInDays}</p>
          <p>Planeta: {trip.planet}</p>
        </Details>
      </ContainerDetails>
      <List>
        {candidates.map(item => {
          return (
            <Item key={item.id}>
              <ItemContainer>
                <p>Nome: {item.name}</p>
                <p>Idade: {item.age}</p>
                <p>Texto motivacional: {item.applicationText}</p>
                <p>Profissão: {item.profession}</p>
                <p>Pais: {item.country}</p>
              </ItemContainer>
              <BtnContainer>
                <Btn name="aprovar" />
                <Btn name="reprovar" />
              </BtnContainer>
            </Item>
          );
        })}
      </List>
      <Btn name="Voltar" click={() => goToLastPage(navigate)} />
    </Container>
  );
};

export { TripDetails };
