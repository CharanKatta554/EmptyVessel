import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import CreateTestimony from './components/create_Testimony';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/addtestimony" element={<CreateTestimony/>}></Route>
    </Routes>
  </BrowserRouter>
);