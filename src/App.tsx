import React, { useState } from "react";
import "./App.css";
import Navbar from "./navigation/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Result } from "./pages/result";
import Layout from "./navigation/sideBar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const callback = (login: boolean) => {
    setLoggedIn(login);
  };

  return (
    <BrowserRouter>
      <div className="navBox">
        {loggedIn && <Layout />}
        <div style={{width: "100%"}}>
        <Navbar loggedIn={loggedIn} callback={callback} />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
