import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { AdminHome } from '../pages/AdminHome';
import { ApplicationForm } from '../pages/ApplicationForm';
import { CreateTrip } from '../pages/CreateTrip';
import { ListTrips } from '../pages/ListTrips';
import { TripDetails } from '../pages/TripDetails';
import { Error } from '../pages/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/trips/list" element={<AdminHome />} />
        <Route path="/trips/application/:id" element={<ApplicationForm />} />
        <Route path="/admin/trips/create" element={<CreateTrip />} />
        <Route path="/trips/list" element={<ListTrips />} />
        <Route path="/admin/trips/:id" element={<TripDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
