import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 3vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  gap: 2vh;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  box-sizing: border-box;
  padding: 0 1vw;
  background: rgba(255, 255, 255, 0.8);
`;

const ApplicationForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputProfession, setInputProfession] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputMotivation, setInputMotivation] = useState('');

  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputAge = e => {
    setInputAge(e.target.value);
  };
  const handleInputProfession = e => {
    setInputProfession(e.target.value);
  };
  const handleInputCountry = e => {
    setInputCountry(e.target.value);
  };
  const handleInputMotivation = e => {
    setInputMotivation(e.target.value);
  };

  return (
    <LoginContainer>
      <h1>Formulário de candidatura</h1>
      <FormContainer>
        <Input
          onChange={handleInputName}
          value={inputName}
          placeholder="Nome"
          type="text"
        />
        <Input
          onChange={handleInputAge}
          value={inputAge}
          placeholder="Planeta"
          type="text"
        />
        <Input
          onChange={handleInputProfession}
          value={inputProfession}
          placeholder="Data de saída"
          type="text"
        />
        <Input
          onChange={handleInputCountry}
          value={inputCountry}
          placeholder="Duração"
          type="text"
        />
        <Input
          onChange={handleInputMotivation}
          value={inputMotivation}
          placeholder="Descrição"
          type="text"
        />

        <BtnLarge name="Login" />
        <BtnLarge name="Voltar" />
      </FormContainer>
    </LoginContainer>
  );
};

export { ApplicationForm };
