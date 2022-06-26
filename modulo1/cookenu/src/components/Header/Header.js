import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToRecipesList, goToLogin } from '../../routes/coodinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToRecipesList(navigate)} color="inherit">
          cookenu
        </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export { Header };
