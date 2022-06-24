import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';

const LoginContainer = styled.form`
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
  width: 25vw;
  gap: 3vh;
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  box-sizing: border-box;
  padding: 0 1vw;
`;

const CreateTrip = () => {
  const [inputName, setInputName] = useState('');
  const [inputPlanet, setInputPlanet] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDuration, setInputDuration] = useState('');
  const [inputDescription, setInputDescription] = useState('');

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
  return (
    <LoginContainer>
      <h1>Cadastrar viagem</h1>
      <FormContainer>
        <Input
          onChange={handleInputName}
          value={inputName}
          placeholder="Nome"
        />
        <Input
          onChange={handleInputPlanet}
          value={inputPlanet}
          placeholder="Planeta"
        />
        <Input
          onChange={handleInputDate}
          value={inputDate}
          placeholder="Data de saída"
        />
        <Input
          onChange={handleInputDuration}
          value={inputDuration}
          placeholder="Duração"
        />
        <Input
          onChange={handleInputDescription}
          value={inputDescription}
          placeholder="Descrição"
        />
        <BtnLarge name="Cadastrar" />
      </FormContainer>
    </LoginContainer>
  );
};

export { CreateTrip };
