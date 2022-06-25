import React, { useState } from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 3rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 1rem 3rem;
`;

const SubTitle = styled.h4`
  margin-bottom: 1rem;
`;

const ListTrips = () => {
  const [list, setList] = useState([
    {
      id: 'AQvqKiajU6dXEaGsaJCC',
      name: 'Ano novo em Mercúrio',
      planet: 'Mercúrio',
      description: 'Venha passar a virada pertinho do Sol!',
      durationInDays: 7,
      date: '31/12/2019'
    },
    {
      id: 'CxcHhGKHVOtNKRrV7PWj',
      description: 'Nenhum surfista intergalático pode ficar fora dessa!',
      name: 'Surfando em Netuno',
      date: '21/12/20',
      planet: 'Netuno',
      durationInDays: 540
    },
    {
      id: 'Ff8iNgDWJfxwOTLhnkZG',
      description: 'Uma viagem bem legal, na melhor época de marte',
      planet: 'Marte',
      durationInDays: 228,
      name: 'Festança Marciana',
      date: '21/12/21'
    }
  ]);
  return (
    <div>
      <h1> Proximas Viagens</h1>
      <div>
        <List>
          {list.map(item => {
            return (
              <Item>
                <h2>{item.name}</h2>
                <SubTitle>{item.description}</SubTitle>
                <p>Planeta: {item.planet}</p>
                <p>Duração: {item.durationInDays}</p>
                <p>Data: {item.date}</p>
              </Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export { ListTrips };
