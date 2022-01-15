import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientsPage from './pages/ClientsPage';
import HomePage from './pages/HomePage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<ClientsPage />} />
      </Routes>
    </BrowserRouter>
  );
}