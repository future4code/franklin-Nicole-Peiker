import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../constants/urls';

export const getLotteries = () => {
  axios
    .get(`${BASE_URL}/loterias`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};

export const getLotteriesDraws = () => {
  axios
    .get(`${BASE_URL}/loterias-concursos`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};

export const getLotteryDraw = id => {
  axios
    .get(`${BASE_URL}/concursos/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert(err.response.message);
    });
};
