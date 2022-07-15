import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logoLabeX.svg';
import { Btn } from '../components/Btn';
import { useNavigate } from 'react-router-dom';
import { goToTripsList, goToAdminHome } from '../routes/coordinator';

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
  min-width: 200px;
  margin-bottom: 5vh;
`;

const AdminBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 0;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <AdminBox>
        <Btn name="Admin" click={() => goToAdminHome(navigate)} />
      </AdminBox>
      <HomeMain>
        <Logo src={logo} alt="Logo LabeX" />
        <Btn name="Proximas viagens" click={() => goToTripsList(navigate)} />
      </HomeMain>
    </HomeContainer>
  );
};

export { Home };
