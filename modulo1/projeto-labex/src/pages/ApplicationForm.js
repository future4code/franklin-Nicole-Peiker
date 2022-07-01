import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 3vh;
  height: 100vh;
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
  color: #000;
`;

const ApplicationForm = () => {
  const [form, handleInputChange, clear] = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  });
  const navigate = useNavigate();
  const params = useParams();

  const onSubmitForm = event => {
    console.log(form);
    event.preventDefault();
    applyToTrip();
  };

  const applyToTrip = () => {
    axios
      .post(`${BASE_URL}/trips/${params.id}/apply`, form, {
        headers: {
          ContentType: 'application/json'
        }
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <h1>Formulário de candidatura</h1>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          onChange={handleInputChange}
          name="name"
          value={form.name}
          placeholder="Nome"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          name="age"
          value={form.age}
          placeholder="Idade"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          name="profession"
          value={form.profession}
          placeholder="Profissão"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          name="applicationText"
          value={form.applicationText}
          placeholder="Texto de motivação"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          name="country"
          value={form.country}
          placeholder="Pais"
          type="text"
        />

        <BtnLarge name="Enviar" type="submit" />
      </FormContainer>
      <BtnLarge name="Voltar" click={() => goToLastPage(navigate)} />
    </Container>
  );
};

export { ApplicationForm };
