import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
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
  const [inputName, setInputName] = useState('');
  const [inputPlanet, setInputPlanet] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDuration, setInputDuration] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const navigate = useNavigate();

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
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  return (
    <LoginContainer>
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
    </LoginContainer>
  );
};

export { CreateTrip };
