import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipes } from '../pages/AddRecipes/AddRecipes';
import { RecipeDetails } from '../pages/RecipeDetails/RecipeDetails';
import { RecipesList } from '../pages/RecipesList/RecipesList';
import { Login } from '../pages/Login/Login';
import { SignUp } from '../pages/SignUp/SignUp';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Header } from '../components/Header/Header.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<RecipesList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/adicionar-receita" element={<AddRecipes />} />
        <Route path="/detalhe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
