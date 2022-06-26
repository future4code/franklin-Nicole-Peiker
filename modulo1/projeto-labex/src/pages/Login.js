import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { useForm } from '../components/useForm';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const LoginContainer = styled.form`
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
  background: rgba(255, 255, 255, 0.8);
  color: #000;
`;

const Login = () => {
  const [form, handleInputChange, clear] = useForm({ email: '', password: '' });
  //const navigate = useNavigate();
  //const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = event => {
    console.log(form);
    event.preventDefault();
    login();
    // login(form, clear, navigate, setRightButtonText, setIsLoading);
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/login`, form)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <LoginContainer onSubmit={onSubmitForm}>
      <Input
        onChange={handleInputChange}
        value={form.email}
        placeholder="email"
        type="email"
      />
      <Input
        onChange={handleInputChange}
        value={form.password}
        placeholder="senha"
        type="password"
      />
      <BtnLarge name="Login" type={'submit'} />
      <BtnLarge name="Voltar" />
    </LoginContainer>
  );
};

export { Login };
