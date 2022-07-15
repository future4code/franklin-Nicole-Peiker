import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { Btn } from '../components/Btn';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { goToLastPage, goToAdminHome } from '../routes/coordinator';
import { useProtectedPage } from '../hooks/useProtectedPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 40vw;
  height: 100vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3vh;
  margin-top: 5vh;
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  box-sizing: border-box;
  padding: 0 1vw;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
`;

const CreateTrip = () => {
  useProtectedPage();
  const [inputName, setInputName] = useState('');
  const [inputPlanet, setInputPlanet] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDuration, setInputDuration] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputPlanet = e => {
    setInputPlanet(e.target.value);
  };
  const handleInputDate = e => {
    setInputDate(e.target.value);
  };
  const handleInputDuration = e => {
    setInputDuration(e.target.value);
  };
  const handleInputDescription = e => {
    setInputDescription(e.target.value);
  };

  const createTrip = e => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/trips`,
        {
          name: inputName,
          planet: inputPlanet,
          date: inputDate,
          description: inputDescription,
          durationInDays: inputDuration
        },
        {
          headers: {
            ContentType: 'application/json',
            auth: token
          }
        }
      )
      .then(res => {
        alert('Viagem cadastrada com sucesso.');
        goToAdminHome(navigate);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <h1>Cadastrar viagem</h1>
      <FormContainer>
        <Input
          onChange={handleInputName}
          value={inputName}
          placeholder="Nome"
          type="text"
        />
        <Input
          onChange={handleInputPlanet}
          value={inputPlanet}
          placeholder="Planeta"
          type="text"
        />
        <Input
          onChange={handleInputDate}
          value={inputDate}
          placeholder="Data de saída"
          type="date"
        />
        <Input
          onChange={handleInputDuration}
          value={inputDuration}
          placeholder="Duração"
          type="text"
        />
        <Input
          onChange={handleInputDescription}
          value={inputDescription}
          placeholder="Descrição"
          type="text"
        />

        <BtnLarge name="Cadastrar" click={createTrip} />
        <BtnLarge name="Voltar" click={() => goToLastPage(navigate)} />
      </FormContainer>
    </Container>
  );
};

export { CreateTrip };
