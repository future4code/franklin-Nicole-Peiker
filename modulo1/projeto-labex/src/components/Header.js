import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToHome, goToAdminHome } from '../routes/coordinator';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.5);
  width: 100vw;
  height: 10vh;
`;
const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p onClick={() => goToHome(navigate)}>HOME</p>
      <p onClick={() => goToAdminHome(navigate)}>LOGIN</p>
    </Container>
  );
};

export { Header };
