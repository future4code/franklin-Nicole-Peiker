import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnLarge } from '../components/BtnLarge';

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
`;

const Login = () => {
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const handleInputName = e => {
    setInputName(e.target.value);
  };
  const handleInputPassword = e => {
    setInputName(e.target.value);
  };

  return (
    <LoginContainer>
      <Input
        onChange={handleInputName}
        value={inputName}
        placeholder="usuário"
      />
      <Input
        onChange={handleInputPassword}
        value={inputPassword}
        placeholder="senha"
        type="password"
      />
      <BtnLarge name="Login" />
      <BtnLarge name="Voltar" />
    </LoginContainer>
  );
};

export { Login };
