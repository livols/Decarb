import React, { useState } from "react";
import Navbar from "./navigation/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Portfolio } from "./pages/portfolio";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const callback = (login: boolean) => {
    setLoggedIn(login);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar loggedIn={loggedIn} callback={callback} />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
