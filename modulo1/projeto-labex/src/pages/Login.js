import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { goToAdminHome, goToLastPage } from '../routes/coordinator';
import { login } from '../services/user';
import { useUnprotectedPage } from '../hooks/useUnprotectedPage';

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  min-width: 220px;
  gap: 3vh;
  height: 100vh; ;
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
  useUnprotectedPage();
  const [form, handleInputChange, clear] = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const onSubmitForm = event => {
    event.preventDefault();
    login(form, clear, navigate);
    goToAdminHome(navigate);
  };

  return (
    <LoginContainer onSubmit={onSubmitForm}>
      <Input
        onChange={handleInputChange}
        value={form.email}
        name="email"
        placeholder="email"
        type="email"
        required
      />
      <Input
        onChange={handleInputChange}
        name="password"
        value={form.password}
        placeholder="senha"
        type="password"
        required
      />
      <BtnLarge name="Login" type={'submit'} />
      <BtnLarge name="Voltar" onClick={() => goToLastPage(navigate)} />
    </LoginContainer>
  );
};

export { Login };
