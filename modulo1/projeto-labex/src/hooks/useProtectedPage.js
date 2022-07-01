import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { goToLogin } from '../routes/coordinator';

const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};

export { useProtectedPage };
