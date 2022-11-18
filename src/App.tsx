import React, { useState } from "react";
import "./App.css";
import Navbar from "./navigation/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Portfolio } from "./pages/portfolio";
import Layout from "./navigation/sideBar";
import { Panels } from "./pages/sidebarPages/panels";
import { OverviewAsset } from "./pages/sidebarPages/overviewAsset";
import { AssetsExisting } from "./pages/sidebarPages/assetsExisting";
import { AssetsDefine } from "./pages/sidebarPages/assetsDefine";
import { RetrofitsExisting } from "./pages/sidebarPages/retrofitsExisting";
import { RetrofitsDefine } from "./pages/sidebarPages/retrofitsDefine";
import { ScenariosExisting } from "./pages/sidebarPages/scenariosExisting";
import { ScenariosDefine } from "./pages/sidebarPages/scenariosDefine";
import { Calculations } from "./pages/mapRedirectPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const callback = (login: boolean) => {
    setLoggedIn(login);
  };

  return (
    <BrowserRouter>
        <Navbar loggedIn={loggedIn} callback={callback} />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/portfolio" element={Portfolio(loggedIn)} />
          <Route path="/panels" element={<Panels />} />
          <Route path="/asset" element={<OverviewAsset />} />
          <Route path="/assetsExisting" element={<AssetsExisting />} />
          <Route path="/assetsDefine" element={<AssetsDefine />} />
          <Route path="/retrofitsExisting" element={<RetrofitsExisting />} />
          <Route path="/retrofitsDefine" element={<RetrofitsDefine />} />
          <Route path="/scenariosExisting" element={<ScenariosExisting />} />
          <Route path="/scenariosDefine" element={<ScenariosDefine />} />
          <Route path="/calculations" element={<Calculations />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
