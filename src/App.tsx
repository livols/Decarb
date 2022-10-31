import React, { useState } from "react";
import "./App.css";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Result } from "./pages/result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product loggedIn={loggedIn} />} />
          <Route path="/pricing" element={<Pricing loggedIn={loggedIn} />} />
          <Route path="/about" element={<About loggedIn={loggedIn} />} />
          <Route path="/account" element={<Account loggedIn={loggedIn} />} />
          <Route path="/result" element={<Result loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
