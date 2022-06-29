import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToAdminHome } from '../routes/coordinator';

const login = (form, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, form)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToAdminHome(navigate);
    })
    .catch(error => {
      console.log(error);
      alert('Acesso negado, verifique se seu email e senha estão corretos');
    });
};

export { login };
