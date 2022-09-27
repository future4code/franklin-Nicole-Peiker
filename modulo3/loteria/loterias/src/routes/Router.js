import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MegaSena from '../pages/MegaSena/MegaSenaPage';
import LotoMania from '../pages/LotoMania/LotoManiaPage';
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSortePage';
import LotoFacil from '../pages/LotoFacil/LotoFacilPage';
import Quina from '../pages/Quina/QuinaPage';
import TimeMania from '../pages/TimeMania/TimeManiaPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
        <Route path="/megasena" element={<MegaSena />} />
        <Route path="/lotomania" element={<LotoMania />} />
        <Route path="/diadesorte" element={<DiaDeSorte />} />
        <Route path="/lotofacil" element={<LotoFacil />} />
        <Route path="/quina" element={<Quina />} />
        <Route path="/timemania" element={<TimeMania />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
