import { useNavigate } from 'react-router-dom';
//import { useLayoutEffect } from 'react';
import { goToAdminHome } from '../routes/coordinator';
import { useEffect } from 'react';

//se tiver o token não deixa ir pro login
const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      goToAdminHome(navigate);
    }
  }, [navigate]);
};

export { useUnprotectedPage };
