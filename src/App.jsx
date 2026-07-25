import React from 'react';
// import css from './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import ExplorerPage from './pages/ExplorerPage';
import ProductPage from './pages/ProductPage';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import MyDashboard from './pages/MyDashboard';
import CreatorsPage from './pages/CreatorsPage';
import DjangounPage from './pages/DjangounPage';


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/produit/:slug" element={<ProductPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<MyDashboard />} />
          <Route path="/artisans" element={<CreatorsPage />} />
          <Route path="/president-djangoun" element={<DjangounPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
