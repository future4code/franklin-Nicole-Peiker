import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const getLoterias = () => {
  axios
    .get(`${BASE_URL}/loterias`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};

export const getLoteriasConcursos = () => {
  axios
    .get(`${BASE_URL}/loterias-concursos`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};

export const getConcursos = id => {
  axios
    .get(`${BASE_URL}/concursos/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};
