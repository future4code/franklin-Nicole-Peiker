import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logoLabeX.svg';
import { Btn } from '../components/Btn';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
`;
const Logo = styled.img`
  width: 30vw;
  margin-bottom: 5vh;
`;

const AdminBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <AdminBox>
        <Btn name="Admin" />
      </AdminBox>
      <HomeMain>
        <Logo src={logo} alt="Logo LabeX" />
        <Btn name="Proximas viagens" />
      </HomeMain>
    </HomeContainer>
  );
};

export { Home };
