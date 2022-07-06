import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemons/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
