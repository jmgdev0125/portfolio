import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
