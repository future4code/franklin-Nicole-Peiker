import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/urls';
import { useRequestData } from '../hooks/useRequestData';

const Home = () => {
  const getPokemons = useRequestData([], BASE_URL);
  const [pokemons, setPokemons] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('Pokemons', pokemons);
  //   console.log(pokemons);
  // }, [pokemons]);

  const handlePokeCard = e => {
    const pokemons = [];

    const novoPokemon = pokemons.push(e.target.textContent);
    console.log(novoPokemon);
    localStorage.setItem('name', pokemons);
  };
  const getPokemonsDetails = useRequestData({}, `${BASE_URL}/${pokemon.name}`);

  const pokemonCard = getPokemons.map(pokemon => {
    return (
      <li onClick={handlePokeCard}>
        {pokemon.name}
        {getPokemonsDetails.sprites.front_default}
      </li>
    );
  });
  return <div>{pokemonCard}</div>;
};

export { Home };
