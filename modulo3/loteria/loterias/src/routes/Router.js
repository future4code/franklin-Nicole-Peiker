import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MegaSena from '../pages/MegaSena/MegaSenaPage';
import LotoMania from '../pages/LotoMania/LotoManiaPage';
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSortePage';
import LotoFacil from '../pages/LotoFacil/LotoFacilPage';
import Quina from '../pages/Quina/QuinaPage';
import TimeMania from '../pages/TimeMania/TimeManiaPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Select from '../components/Select/Select';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
        <Route path="/0" element={<MegaSena />} />
        <Route path="/1" element={<Quina />} />
        <Route path="/2" element={<LotoFacil />} />
        <Route path="/3" element={<LotoMania />} />
        <Route path="/4" element={<TimeMania />} />
        <Route path="/5" element={<DiaDeSorte />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
