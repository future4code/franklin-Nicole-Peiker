import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/urls';
import {
  Bottom,
  BoxAside,
  BoxContainer,
  DropDown,
  Logo,
  Raffle,
  RaffleBall,
  RaffleBox,
  RaffleDate,
  RaffleInfo,
  RaffleNumber,
  RaffleTxt,
  RightContainer,
  Title,
  TitleText,
  UpContainer
} from './Style';
import AsideBackground from '../AsideBackground/AsideBackground';
import logo from '../../assets/logo.svg';
import axios from 'axios';

const Select = () => {
  const [selectedLottery, setSelectedLottery] = useState(0);
  const [lotteries, setLotteries] = useState([]);
  const [idRaffle, setIdRaffle] = useState([]);
  const [raffle, setRaffle] = useState('');
  const [dateRaffle, setDateRaffle] = useState('');
  const getDate = dateRaffle.split('T')[0];
  const dateArr = getDate.split('-');
  const corretedDate = dateArr.reverse().join('/');

  const getLotteries = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then(res => {
        setLotteries(res.data); // loterias p/ opions do select
        return axios.get(`${BASE_URL}/loterias-concursos`);
      })
      .then(res => {
        setIdRaffle(res.data[selectedLottery].concursoId); // id do concurso
        return axios.get(`${BASE_URL}/concursos/${idRaffle}`);
      })
      .then(res => {
        setRaffle(res.data.numeros); // numeros sorteados
        setDateRaffle(res.data.data); // data do sorteiro
      })
      .catch(err => {
        console.log(err.response.message);
      });
  };
  useEffect(getLotteries, [idRaffle, selectedLottery]);

  const color = [
    '#6BEFA3',
    '#8666EF',
    '#DD7AC6',
    '#FFAB64',
    '#5AAD7D',
    '#BFAF83'
  ];

  const handleSelectChange = e => {
    console.log(e.target.value);
    setSelectedLottery(e.target.value);
  };
  return (
    <BoxContainer>
      <AsideBackground color={color[selectedLottery]} />
      <UpContainer>
        <BoxAside>
          <DropDown name="lotteries" onChange={handleSelectChange}>
            {lotteries.length > 0 &&
              lotteries.map(lottery => {
                return (
                  <option key={lottery.id} value={lottery.id}>
                    {lottery.nome.toUpperCase()}
                  </option>
                );
              })}
          </DropDown>
          <Title>
            <Logo alt="logo" src={logo} />
            {lotteries.length > 0 && (
              <TitleText>
                {lotteries[selectedLottery].nome.toUpperCase()}
              </TitleText>
            )}
          </Title>
          <RaffleTxt>
            <Raffle>CONCURSO</Raffle>
            {idRaffle.length > 0 && raffle.length > 0 && dateRaffle.length > 0 && (
              <RaffleInfo>
                <RaffleNumber> {idRaffle} </RaffleNumber>
                <RaffleDate> - {corretedDate} </RaffleDate>
              </RaffleInfo>
            )}
          </RaffleTxt>
        </BoxAside>
        <RightContainer>
          <RaffleBox>
            {idRaffle.length > 0 &&
              raffle.length > 0 &&
              raffle.map(number => (
                <RaffleBall key={number}> {number}</RaffleBall>
              ))}
          </RaffleBox>
          <Bottom>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </Bottom>
        </RightContainer>
      </UpContainer>
    </BoxContainer>
  );
};

export default Select;
