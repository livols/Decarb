import React from 'react';
import './App.css';
import {Product} from "./pages/product";
import {Pricing} from "./pages/pricing";
import {About} from "./pages/about";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="pricing/*" element={<Pricing />} />
        <Route path="about/*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
