import React, { useState } from "react";
import "./App.css";
import Navbar from "./navigation/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Result } from "./pages/result";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
